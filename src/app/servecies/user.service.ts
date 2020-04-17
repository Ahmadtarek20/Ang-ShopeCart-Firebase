import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs : AngularFirestore , private as : AuthService) { }

  addnewusers(id, name, address){
   return this.fs.doc('users/'+id).set({
      name,
      address
    })
  }
  getUserDate(){
    return this.fs.doc('/users'+ this.as.userId).valueChanges()
  }
}
