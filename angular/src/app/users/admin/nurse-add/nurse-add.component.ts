import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-nurse-add',
  templateUrl: './nurse-add.component.html',
  styleUrls: ['./nurse-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NurseAddComponent implements OnInit {
  username: string;
  password: string;
  uid: number;
  constructor(
    public dialogRef: MatDialogRef<NurseAddComponent>,
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
