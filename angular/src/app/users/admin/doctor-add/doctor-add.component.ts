import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DoctorAddComponent implements OnInit {
  username: string;
  password: string;
  uid: number;
  constructor(
    public dialogRef: MatDialogRef<DoctorAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.uid = data + 1;
    }

  Add() {
    const result = {
      uid : this.uid,
      username: this.username
    };
    this.dialogRef.close(result);
  }

  ngOnInit() {
  }

}
