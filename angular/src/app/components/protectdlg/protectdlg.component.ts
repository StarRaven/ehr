import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-protectdlg',
  templateUrl: './protectdlg.component.html',
  styleUrls: ['./protectdlg.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProtectdlgComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProtectdlgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
