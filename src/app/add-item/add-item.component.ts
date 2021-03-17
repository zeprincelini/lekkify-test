import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StoreApiService } from '../store-api.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  data = {};
  product_form: FormGroup;
  success = false;
  error = false

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
    let formData: any = new FormData();
    formData.append("name", this.product_form.get("name").value);
    formData.append("price", this.product_form.get("price").value);
    formData.append("img", this.product_form.get("img").value);
    console.log(this.product_form.value);
    this.data = this.product_form.value
    this.store.createProduct(formData).subscribe(
      (res) => {console.log(res);
      this.success = true;
      },
      (err) => {
        console.log(err);
        this.error = true;
      }
    )
    this.product_form.reset();
  }

}
