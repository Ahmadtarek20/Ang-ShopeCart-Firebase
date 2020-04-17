import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private fs: AngularFirestore , private storage: AngularFireStorage) { }

  getallGoods(){
    return this.fs.collection('goods').snapshotChanges()
  }
  addnewitem(name: string, price: Number, image: File){
    return new Promise((resolve , reject) => {
      let ref  = this.storage.ref('goods/' + image.name)
      ref.put(image).then(() => {
        ref.getDownloadURL().subscribe(photoUrl => {
          this.fs.collection('goods').add({
             name,
             price,
             photoUrl
          }).then(() =>resolve('Working '))
        })
      })
    })
  }
}
