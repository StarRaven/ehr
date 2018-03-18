import { ViewChild, Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { GlobalService } from '../../global.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  type: string;
  hide: string;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    public global: GlobalService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.type = data.type;
    }

  Login() {
    if (this.type === 'admin') {
      if ((this.username === 'admin') && (this.password === 'admin')) {
          this.dialogRef.close();
          this.global.username = 'admin';
          this.global.role = 'admin';
          this.router.navigate(['admin/doctor']);
       }
    } else {
      if ((this.username === 'doctor1') && (this.password === 'doctor1')) {
        this.dialogRef.close();
        this.global.username = 'doctor1';
        this.global.role = 'doctor';
        this.global.theme = 'custom-theme-1';
        this.router.navigate(['doctor']);
      }
      if ((this.username === 'doctor2') && (this.password === 'doctor2')) {
        this.dialogRef.close();
        this.global.username = 'doctor2';
        this.global.role = 'doctor';
        this.global.theme = 'custom-theme-2';
        this.router.navigate(['doctor']);
      }
      if ((this.username === 'doctor') && (this.password === 'doctor')) {
        this.dialogRef.close();
        this.global.username = 'doctor';
        this.global.role = 'doctor';
        this.global.theme = 'custom-theme-3';
        this.router.navigate(['doctor']);
      }
    }
  }

  ngOnInit() {
    this.hide = 'password';
  }

}
