import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StoreApiService {

  constructor(private fire: AngularFirestore) { }

  createProduct(product){
    return this.fire.collection('products').add(product);
  }

  getProduct(){
    return this.fire.collection('products').get();
  }
}
