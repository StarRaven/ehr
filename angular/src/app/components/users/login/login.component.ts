import { ViewChild, Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerLoginService } from '../../../services/users/customerlogin.service';
import { StoreLoginService } from '../../../services/users/storelogin.service';
import { SalesmanLoginService } from '../../../services/users/salesman-login.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../../global.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  customer_username: string;
  customer_password: string;
  store_username: string;
  store_password: string;
  salesman_username: string;
  salesman_password: string;
  login_success: boolean;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    public global: GlobalService,
    private router: Router,
    private customerlogin: CustomerLoginService,
    private storelogin: StoreLoginService,
    private salesmanlogin: SalesmanLoginService,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    }

  customerLogin(): void {
    let loginUser: any = {
      username: this.customer_username,
      password: this.customer_password
    };

    this.customerlogin.login(loginUser).subscribe(
      (jsonData) => {
        if (jsonData.loginstatus) {
          this.global.username = jsonData.username;
          this.global.id = jsonData.CustomerID;
          this.global.role = 'customer';
          this.global.login = true;
          this.dialogRef.close();
          this.router.navigate(['shopping']);
        }
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  storeLogin(): void {
    let loginUser: any = {
      username: this.store_username,
      password: this.store_password
    };

    this.storelogin.login(loginUser).subscribe(
      (jsonData) => {
        if (jsonData.loginstatus) {
          this.global.username = jsonData.username;
          this.global.id = jsonData.StoreID;
          this.global.role = 'store';
          this.global.login = true;
          this.dialogRef.close();
          this.router.navigate(['store/manage']);
        }
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  salesmanLogin(): void {
    let loginUser: any = {
      username: this.salesman_username,
      password: this.salesman_password
    };

    this.salesmanlogin.login(loginUser).subscribe(
      (jsonData) => {
        if (jsonData.loginstatus) {
          this.global.username = jsonData.username;
          this.global.id = jsonData.SalespersonID;
          this.global.role = 'salesperson';
          this.global.login = true;
          this.dialogRef.close();
          this.router.navigate(['transaction/manage']);
        }
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  ngOnInit() {
  }

}
