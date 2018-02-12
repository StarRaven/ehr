import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from '../../users/login/login.component';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openLoginDialog(role: string): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '529px',
      data: { type: role }
    });
  }

  ngOnInit() {
  }

}
