import { Injectable } from '@angular/core';
import {  AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>
  userId:string=''

  constructor(private afaut :AngularFireAuth) {
    this.user = afaut.user
   }

  singup(email , password){
    return this.afaut.auth.createUserWithEmailAndPassword(email,password)

  }

  login(email , password){
    return this.afaut.auth.signInWithEmailAndPassword(email,password)
  }

  logout(){return this.afaut.auth.signOut()}

}
