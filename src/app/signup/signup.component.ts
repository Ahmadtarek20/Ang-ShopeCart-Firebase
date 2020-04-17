import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servecies/auth.service';
import { User } from '../interfac/user.interface';
import { UserService } from '../servecies/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errormass:string = ""
  constructor(private as :AuthService, private us :UserService,private router :Router) { }

  ngOnInit() {
  }
  signup(form){
     let data : User= form.value
     this.as.singup(data.email,data.password)
     .then(results => {
       this.errormass = ''
       this.us.addnewusers(results.user.uid,data.name,data.password)
       .then(() =>{
         this.router.navigate(['/'])
       })
     })
     .catch(err =>{
       this.errormass = err.massage
     } )

  }
}
