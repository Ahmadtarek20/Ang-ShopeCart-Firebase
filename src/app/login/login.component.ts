import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servecies/auth.service';
import { UserService } from '../servecies/user.service';
import { Router } from '@angular/router';
import { User } from '../interfac/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as:AuthService,private us :UserService,private router :Router) { }

  loginerror:string = ""

  ngOnInit() {
  }
  login(form){
    let data : User= form.value
     this.as.login(data.email,data.password)
     .then(results => {
      this.loginerror = ''
      this.router.navigate(['/'])
    })
    .catch(err =>{
     // console.log('a',err)
      this.loginerror = err.massage
    } )
 }
}
