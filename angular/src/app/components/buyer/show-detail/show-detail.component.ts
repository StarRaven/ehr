import { Component, OnInit, Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GlobalService } from '../../../global.service';
import { AddtransactionService } from '../../../services/buyer/addtransaction.service';

import { ProtectdlgComponent } from '../../protectdlg/protectdlg.component';


@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {
  qty: number;
  constructor(
    public dialog: MatDialog,
    private http: Http,
    private dialogRef: MatDialogRef<ShowDetailComponent>,
    public global: GlobalService,
    private sanitizer: DomSanitizer,
    private addtransaction: AddtransactionService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  filter() {
    this.dialogRef.close("filter");
  }

  buy() {
    let dialogRef = this.dialog.open(ProtectdlgComponent, {
      width: '250px',
      data: 'Are you sure you want to place the order?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let sampletransaction: any = {
          //TransactionID:,
          ProductID: this.data.id,
          //SalespersonID: this.data.SalespersonID,
          CustomerID: this.global.id,
          //Date:,
          Status: 'pending',
          StoreID: this.data.storeid,
          Quantity: this.qty,
        };

        this.addtransaction.add(sampletransaction).subscribe(
          (jsonData) => {
            if (jsonData.addstatus) {
              this.dialogRef.close("buy");
            }
          },
          // The 2nd callback handles errors.
          (err) => console.error(err),
          // The 3rd callback handles the "complete" event.
          () => console.log("observable complete")
        );
      }
    });
  }

  ngOnInit() {
    this.qty = 1;
    console.log(this.data);
  }

}
