import { Injectable } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreApiService {
  url = "api/products"

  constructor(private http: HttpClient) { }

  createProduct(product){
    return this.http.post<any>(this.url, product);
  }

  getProduct(){
    return this.http.get<any>(this.url);
  }
}
