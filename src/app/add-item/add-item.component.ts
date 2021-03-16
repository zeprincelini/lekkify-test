import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { StoreApiService } from '../store-api.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  data = {};
  product_form: FormGroup;

  constructor(private store: StoreApiService) { }

  ngOnInit(): void {
    this.product_form = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'price': new FormControl('', [Validators.required]),
      'img': new FormControl(null)
    })  
  }

  uploadFile(event){
    const file = (event.target as HTMLInputElement).files[0];
    this.product_form.patchValue({
      img: file
    });
    this.product_form.get('img').updateValueAndValidity()
  }

  onSubmit(){
    console.log(this.product_form.value);
    this.data = this.product_form.value
    this.store.createProduct(this.data).then((res) => {
      console.log(res)
    }).catch((e) => {
      console.log(e)
    })
    this.product_form.reset();
  }

}
