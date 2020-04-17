import { Component, OnInit} from '@angular/core';
import { AuthService } from '../servecies/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../servecies/user.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isOpen: boolean = false
  isuser : boolean= false
  isAdmin : boolean = false

  constructor(private as:AuthService ,private router :Router , private us: UserService) {

   }
   ngOnInit() {
     this.as.user.subscribe(user => {
      if(user){
        this.isuser = true
        this.as.userId=user.uid
        this.us.getUserDate().subscribe(data => {
          if(data['admin'])this.isAdmin = true;
        })
      }
      else {
        this.isuser = false
        this.as.userId=''
      }
     })
  }

   togelnavbar(){
     this.isOpen=!this.isOpen;
   }
   logout(){
     this.as.logout()
     .then(results =>{
      this.router.navigate(['/login'])
      console.log('out')
     } )
   }

}
