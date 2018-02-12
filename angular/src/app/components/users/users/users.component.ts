import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openLoginDialog(role: string): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '529px',
      data: { type: role }
    });
    /*
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.animal = result;
        });
        */
  }

  ngOnInit() {
  }

}
