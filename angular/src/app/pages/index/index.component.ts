import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from '../../users/login/login.component';
import { GlobalService } from '../../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {
  hide = true;
  username: string;
  password: string;

  constructor(
    public dialog: MatDialog,
    public global: GlobalService,
    private router: Router
  ) { }

  Login() {
    if ((this.username === 'doctor1') && (this.password === 'doctor1')) {
      this.global.username = 'doctor1';
      this.global.role = 'doctor';
      this.global.theme = 'custom-theme-1';
      this.router.navigate(['doctor']);
    }
    if ((this.username === 'doctor2') && (this.password === 'doctor2')) {
      this.global.username = 'doctor2';
      this.global.role = 'doctor';
      this.global.theme = 'custom-theme-2';
      this.router.navigate(['doctor']);
    }
    if(this.username === 'Andi' || this.username === 'Jonathan'){
      this.global.username = 'doctor';
      this.global.chatUsername = this.username
      this.global.role = 'doctor';
      this.global.theme = 'custom-theme-3';
      this.router.navigate(['doctor']);
    }
    if ((this.username === 'doctor') && (this.password === 'doctor')) {
      this.global.username = 'doctor';
      this.global.role = 'doctor';
      this.global.theme = 'custom-theme-3';
      this.router.navigate(['doctor']);
    }
  }

  Register() {

  }

  ngOnInit() {
  }

}
