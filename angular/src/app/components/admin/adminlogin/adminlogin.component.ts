import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalService } from '../../../global.service';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminloginComponent implements OnInit {
  admin_username: string;
  admin_password: string;
  constructor(
    public global: GlobalService,
    private http: Http,
    private router: Router,
  ) { }

  adminLogin() {
    let body = JSON.stringify({ username: this.admin_username, password: this.admin_password, role: "role" });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post('/api/login/admin', body, { headers: headers }).subscribe(
      (jsonData) => {
        let jsonDataBody = jsonData.json();
        if (jsonDataBody.loginstatus) {
          this.global.username = jsonDataBody.username;
          this.global.id = jsonDataBody.AdminID;
          this.global.role = 'admin';
          this.global.login = true;
          this.router.navigate(['admin/manage']);
        }
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  ngOnInit() {
    this.admin_username = '';
    this.admin_password = '';
  }

}
