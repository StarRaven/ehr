import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TopmenuComponent } from '../../topmenu/topmenu.component';
import { Headers, Http } from '@angular/http';
import { GlobalService } from '../../../global.service';
import { Transaction } from '../../transaction';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApprovetransactionService } from '../../../services/seller/approvetransaction.service';
import { CanceltransactionService } from '../../../services/seller/canceltransaction.service';

import { ProtectdlgComponent } from '../../protectdlg/protectdlg.component';

@Component({
  selector: 'app-transactionsmanage',
  templateUrl: './transactionsmanage.component.html',
  styleUrls: ['./transactionsmanage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TransactionsmanageComponent implements OnInit {
  displayedColumns = ['transactionid', 'product', 'date', 'basic', 'price', 'quantity', 'amount', 'customer', 'street', 'city', 'state', 'zipcode', 'kind', 'operations'];
  displayedColumns2 = ['transactionid', 'product', 'date', 'basic', 'price', 'quantity', 'amount', 'customer', 'street', 'city', 'state', 'zipcode', 'kind', 'salesperson'];
  dataSourcePending = new MatTableDataSource<Transaction>();
  dataSourceDelivering = new MatTableDataSource<Transaction>();
  dataSourceCompleted = new MatTableDataSource<Transaction>();
  dataSourceCanceled = new MatTableDataSource<Transaction>();

  transactions: Transaction[] = [];
  constructor(
    private http: Http,
    public dialog: MatDialog,
    public global: GlobalService,
    private approvetransaction: ApprovetransactionService,
    private canceltransaction: CanceltransactionService,
  ) { }

  getAllTransaction(): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    this.http.get('/api/transaction/salesman/get/' + this.global.id, { headers: headers }).subscribe(
      (jsonData) => {
        this.transactions = [];
        let jsonDataBody = jsonData.json();
        for (let entry of jsonDataBody) {
          console.log(entry);
          let r: Transaction = {
            transactionid: entry[0],
            productname: entry[1],
            date: entry[2],
            basic: entry[3],
            price: entry[4],
            amount: entry[5],
            quantity: entry[6],
            customername: entry[7],
            customerstreet: entry[8],
            customercity: entry[9],
            customerstate: entry[10],
            customerzipcode: entry[11],
            customerkind: entry[12],
            salespersonname: entry[13],
            status: entry[14],
          };
          this.transactions.push(r);
        };

        function FilterByPending(obj) {
          return obj.status === "pending";
        };
        function FilterByDelivering(obj) {
          return obj.status === "delivering";
        };
        function FilterByCompleted(obj) {
          return obj.status === "completed";
        };
        function FilterByCanceled(obj) {
          return obj.status === "canceled";
        };
        this.dataSourcePending = new MatTableDataSource<Transaction>(this.transactions.filter(FilterByPending));
        this.dataSourceDelivering = new MatTableDataSource<Transaction>(this.transactions.filter(FilterByDelivering));
        this.dataSourceCompleted = new MatTableDataSource<Transaction>(this.transactions.filter(FilterByCompleted));
        this.dataSourceCanceled = new MatTableDataSource<Transaction>(this.transactions.filter(FilterByCanceled));
        //console.log(this.transactions);
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  approve(id) {
    let dialogRef = this.dialog.open(ProtectdlgComponent, {
      width: '250px',
      data: 'Are you sure you want to approve and deliver this order?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        let sampleupdate: any = {
          TransactionID: id,
          SalespersonID: this.global.id,
        };

        this.approvetransaction.approve(sampleupdate).subscribe(
          (jsonData) => {
            if (jsonData.approvestatus) {
              this.getAllTransaction();
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

  cancel(id) {
    let dialogRef = this.dialog.open(ProtectdlgComponent, {
      width: '250px',
      data: 'Are you sure you want to cancel this order?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        let sampleupdate: any = {
          TransactionID: id,
          SalespersonID: this.global.id,
        };

        this.canceltransaction.cancel(sampleupdate).subscribe(
          (jsonData) => {
            if (jsonData.cancelstatus) {
              this.getAllTransaction();
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
    this.getAllTransaction();
  }

}
