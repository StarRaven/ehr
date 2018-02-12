import { ViewChild, Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerRegisterService } from '../../../services/users/customerregister.service';
import { StoreRegisterService } from '../../../services/users/storeregister.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../../global.service';
import 'rxjs/add/operator/map';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Region } from '../../region';
import { Category } from '../../category';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class RegisterComponent implements OnInit {
  customer_register_form: FormGroup;
  store_register_form: FormGroup;
  regions: Region[] = [];
  categories: Category[] = [];

  constructor(
    private http: Http,
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<RegisterComponent>,
    public global: GlobalService,
    private router: Router,
    private customerregister: CustomerRegisterService,
    private storeregister: StoreRegisterService,

    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.store_register_form = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      confirm: new FormControl(null, [Validators.required]),
      street: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      zipcode: new FormControl(null, [Validators.required]),
      manager_name: new FormControl(null, [Validators.required]),
      region: new FormControl(null, [Validators.required]),
    });

    this.customer_register_form = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      confirm: new FormControl(null, [Validators.required]),
      street: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      zipcode: new FormControl(null, [Validators.required]),
      kind: new FormControl(null, [Validators.required]),

      marriage: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      income: new FormControl(null, [Validators.required]),

      category: new FormControl(null, [Validators.required]),
      companyincome: new FormControl(null, [Validators.required]),

    });
  }

  checkvalid(): boolean {
    if (!this.customer_register_form.get('username').value)
      return true;
    if (!this.customer_register_form.get('password').value)
      return true;
    if (!this.customer_register_form.get('confirm').value)
      return true;
    if (!this.customer_register_form.get('street').value)
      return true;
    if (!this.customer_register_form.get('city').value)
      return true;
    if (!this.customer_register_form.get('zipcode').value)
      return true;
    if (!this.customer_register_form.get('kind').value)
      return true;
    if (this.customer_register_form.get('kind').value == 'home') {
      if (!this.customer_register_form.get('marriage').value)
        return true;
      if (!this.customer_register_form.get('gender').value)
        return true;
      if (!this.customer_register_form.get('age').value)
        return true;
      if (!this.customer_register_form.get('income').value)
        return true;
    }
    else if (this.customer_register_form.get('kind').value == 'business') {
      if (!this.customer_register_form.get('category').value)
        return true;
      if (!this.customer_register_form.get('companyincome').value)
        return true;
    }
    return false;
  }

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
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
    //console.log(this.store_register_form.value);  // {first: 'Nancy', last: 'Drew'}
  }

  CustomerRegister(): void {
    let registerCustomer: any = {
      Username: this.customer_register_form.get('username').value,
      Password: this.customer_register_form.get('password').value,
      Street: this.customer_register_form.get('street').value,
      City: this.customer_register_form.get('city').value,
      State: this.customer_register_form.get('state').value,
      ZipCode: this.customer_register_form.get('zipcode').value,
      Kind: this.customer_register_form.get('kind').value,
      Marriage: this.customer_register_form.get('marriage').value,
      Gender: this.customer_register_form.get('gender').value,
      Age: this.customer_register_form.get('age').value,
      Income: this.customer_register_form.get('income').value,
      CategoryID: this.customer_register_form.get('category').value,
      Companyincome: this.customer_register_form.get('companyincome').value
    };

    this.customerregister.register(registerCustomer).subscribe(
      (jsonData) => {
        if (jsonData.registerstatus) {
          this.global.username = jsonData.username;
          this.global.login = true;
          this.global.id = jsonData.id;
          this.global.role = 'customer';
          this.dialogRef.close();
          this.router.navigate(['shopping']);
        }
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
    //console.log(this.store_register_form.value);  // {first: 'Nancy', last: 'Drew'}
  }

  ngOnInit() {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    this.http.get('/api/get/region', { headers: headers }).subscribe(
      (jsonData) => {
        let jsonDataBody = jsonData.json();
        for (let entry of jsonDataBody) {
          let r: Region = {
            id: entry[0],
            name: entry[1]
          };
          this.regions.push(r);
        };
        console.log(this.regions);
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );

    this.http.get('/api/get/category', { headers: headers }).subscribe(
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
