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
          this.router.navigate(['admin']);
       }
    } else {
      if ((this.username === 'doctor') && (this.password === 'doctor')) {
        this.dialogRef.close();
        this.router.navigate(['doctor']);
      }
      if ((this.username === 'nurse') && (this.password === 'nurse')) {
        this.dialogRef.close();
        this.router.navigate(['nurse']);
      }
    }
  }

  ngOnInit() {
  }

}
