import { Component, OnInit } from '@angular/core';
import { StoreApiService } from '../store-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product_data = [{}]
  constructor(private store: StoreApiService) { }

  ngOnInit(): void {
    this.store.getProduct().subscribe(
      (res => {this.product_data = res;
      console.log(this.product_data)}),
      (err => {console.log(err)})
    )
  }

}
