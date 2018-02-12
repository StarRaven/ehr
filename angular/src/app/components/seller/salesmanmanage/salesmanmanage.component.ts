import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TopmenuComponent } from '../../topmenu/topmenu.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GlobalService } from '../../../global.service';
import { AddsalesmanComponent } from '../addsalesman/addsalesman.component';
import { Salesperson } from '../../salesperson';
import { Headers, Http } from '@angular/http';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { UpdatesalesmanComponent } from '../updatesalesman/updatesalesman.component';
import { DeletesalesmanService } from '../../../services/seller/deletesalesman.service';

import { ProtectdlgComponent } from '../../protectdlg/protectdlg.component';

@Component({
  selector: 'app-salesmanmanage',
  templateUrl: './salesmanmanage.component.html',
  styleUrls: ['./salesmanmanage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SalesmanmanageComponent implements OnInit {
  salespersons: Salesperson[] = [];
  displayedColumns = ['id', 'name', 'email', 'job', 'salary', 'operations'];
  dataSource = new MatTableDataSource<Salesperson>();

  constructor(
    public dialog: MatDialog,
    public global: GlobalService,
    private http: Http,
    private deletesalesman: DeletesalesmanService,
  ) { }

  ngOnInit() {
    this.getAllSalesman();
  }

  openAddSalesman(): void {
    let dialogRef = this.dialog.open(AddsalesmanComponent, {
      width: '368px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllSalesman();
    });
  }


  update(salesman): void {
    //console.log(product);
    let dialogRef = this.dialog.open(UpdatesalesmanComponent, {
      width: '368px',
      data: salesman,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result)
        this.getAllSalesman();
    });
  }


  delete(id) {
    let dialogRef = this.dialog.open(ProtectdlgComponent, {
      width: '250px',
      data: 'Are you sure you want to delete this salesperson?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deletesalesman.delete(id).subscribe(
          (jsonData) => {
            if (jsonData.deletestatus) {
              this.getAllSalesman();
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

  getAllSalesman() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.get('/api/get/salesman/' + this.global.id, { headers: headers }).subscribe(
      (jsonData) => {
        this.salespersons = [];
        let jsonDataBody = jsonData.json();
        for (let entry of jsonDataBody) {
          let r: Salesperson = {
            id: entry[0],
            name: entry[1],
            password: entry[2],
            street: entry[3],
            city: entry[4],
            state: entry[5],
            zipcode: entry[6],
            email: entry[7],
            job: entry[8],
            salary: entry[9],
          };
          this.salespersons.push(r);
        };
        this.dataSource = new MatTableDataSource<Salesperson>(this.salespersons);
        console.log(this.salespersons);
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }
}
