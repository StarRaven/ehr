import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NurseAddComponent } from '../nurse-add/nurse-add.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nurse-control',
  templateUrl: './nurse-control.component.html',
  styleUrls: ['./nurse-control.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NurseControlComponent implements OnInit {
  displayedColumns = ['uid', 'username', 'operations'];
  dataSource = new MatTableDataSource<Nurse>();
  nurses: Nurse[] = [];
  uids: number;

  constructor(public dialog: MatDialog, private router: Router) {
    let d = new Nurse();
    d.uid = 0;
    d.username = 'nurse1';
    this.nurses.push(d);
    d = new Nurse();
    d.uid = 1;
    d.username = 'nurse2';
    this.nurses.push(d);
    this.dataSource = new MatTableDataSource<Nurse>(this.nurses);
  }

  ngOnInit() {
    this.uids = 1;
  }

  deleteNurse(uid: number) {
    const newnurses: Nurse[] = [];
    for (let i = 0; i < this.nurses.length; i++) {
      if (this.nurses[i].uid !== uid) {
        newnurses.push(this.nurses[i]);
      }
    }
    this.nurses = newnurses;
    this.dataSource = new MatTableDataSource<Nurse>(this.nurses);
  }

  addNurse() {
    const dialogRef = this.dialog.open(NurseAddComponent, {
      width: '360px',
      data: this.uids,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.uids++;
      const newnurse: Nurse = new Nurse();
      newnurse.uid = result.uid;
      newnurse.username = result.username;
      this.nurses.push(newnurse);
      this.dataSource = new MatTableDataSource<Nurse>(this.nurses);
    });
  }
}

class Nurse {
  uid: number;
  username: string;
}
