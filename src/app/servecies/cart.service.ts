import { Injectable } from '@angular/core';
import { Good } from '../interfac/doodsinterfac';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs : AngularFirestore,private as : AuthService) { }
  addtocart(data: Good){
  return this.fs.collection(`users/${this.as.userId}/cart`).add(data)
  }

  getcarts(){
    return this.fs.collection(`users/${this.as.userId}/cart`).snapshotChanges()
  }
  delete(id){
   return this.fs.doc(`users/${this.as.userId}/cart/${id}`).delete()
  }
  save(id , amount){
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).update({
      amount
    })
  }
}

