import { Component, OnInit, Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddproductService } from '../../../services/seller/addproduct.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { GlobalService } from '../../../global.service';
import { Category } from '../../category';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  url:string;
  url2:string;
  product_add_form: FormGroup;
  categories: Category[] = [];
  constructor(
    private http: Http,
    private productAdd: AddproductService,
    public global: GlobalService,
    public dialogRef: MatDialogRef<AddproductComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {

    this.product_add_form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required]),
      ISBN: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
      basic: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      kind: new FormControl(null, [Validators.required]),
    });
  }

  previewImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
/*
  StoreRegister(): void {
    let registerStore: any = {
      Street: this.store_register_form.get('street').value,
      City: this.store_register_form.get('city').value,
      State: this.store_register_form.get('state').value,
      ZipCode: this.store_register_form.get('zipcode').value,
      StoreName: this.store_register_form.get('username').value,
      Password: this.store_register_form.get('password').value,
      ManagerName: this.store_register_form.get('manager_name').value,
      RegionID: this.store_register_form.get('region').value,
    };

    this.storeregister.register(registerStore).subscribe(
      (jsonData) => {
        if (jsonData.registerstatus) {
          this.global.username = jsonData.username;
          this.global.login = true;
          this.global.id = jsonData.id;
          this.global.role = 'store';
          this.dialogRef.close();
          this.router.navigate(['store/manage']);
        }
      },
      (err) => console.error(err),
      () => console.log("observable complete")
    );
  }
  */

  AddProduct(): void{
    let sampleproduct: any = {
      ImageBase64: this.url,
      Name: this.product_add_form.get('name').value,
      Author: this.product_add_form.get('author').value,
      ISBN: this.product_add_form.get('ISBN').value,
      Description: this.product_add_form.get('description').value,
      Amount: this.product_add_form.get('amount').value,
      Price: this.product_add_form.get('price').value,
      Basic: this.product_add_form.get('basic').value,
      KindID: this.product_add_form.get('kind').value,
      StoreID: this.global.id,
    };

    this.productAdd.add(sampleproduct).subscribe(
      (jsonData) => {
        if (jsonData.submitstatus) {
          this.product_add_form.reset();
          this.url="";
          this.dialogRef.close();
        }
      },
      (err) => console.error(err),
      () => console.log("observable complete")
    );
  }

  ngOnInit() {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    this.http.get('/api/get/kind', { headers: headers }).subscribe(
      (jsonData) => {
        let jsonDataBody = jsonData.json();
        for (let entry of jsonDataBody) {
          let r: Category = {
            id: entry[0],
            name: entry[1]
          };
          this.categories.push(r);
        };
        console.log(this.categories);
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

}
