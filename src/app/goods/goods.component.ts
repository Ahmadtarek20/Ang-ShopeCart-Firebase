import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Good } from '../interfac/doodsinterfac';
import { NgForm } from '@angular/forms';
import { GoodsService } from '../servecies/goods.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  @ViewChild('image') image : ElementRef

  constructor(private gs :GoodsService) { }

  ngOnInit() {
  }
  addnewitem(from: NgForm){
    let name = (<Good>from.value).name,
        price = (<Good>from.value).price,
        image = (< HTMLInputElement>this.image.nativeElement).files[0];
        this.gs.addnewitem(name, price , image).then(mas=>console.log(mas))

  }
}
