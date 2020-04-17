import { Component, OnInit, OnDestroy } from '@angular/core';
import { Good } from '../interfac/doodsinterfac';
import { GoodsService } from '../servecies/goods.service';
import { element } from 'protractor';
import { Subscription } from 'rxjs';
import { CartService } from '../servecies/cart.service';
import { AuthService } from '../servecies/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{

  goods: Good[] = []
  goodsobserv: Subscription
  add:number = -1

  constructor(private gs: GoodsService , private cs : CartService , private as: AuthService , private router : Router) { }

  ngOnInit() {
    this.goodsobserv= this.gs.getallGoods().subscribe(data => {
      this.goods= data.map(element =>{
        return{
          id: element.payload.doc.id,
          ...element.payload.doc.data()    //to be get all prpoarty

        }
      })
    })
  }
ngOnDestroy(){
this.goodsobserv.unsubscribe()
}

  addtoCare(index: number){
   if(this.as.userId)this.add = +index;
   else this.router.navigate(['/login']);
  }
  buy(amount: number){
    let selectedgood = this.goods[this.add]
    let data = {
      name: selectedgood.name,
      amount: +amount,
      price: selectedgood.price
    }
    this.cs.addtocart(data).then(() => this.add = -1)
  }
}
