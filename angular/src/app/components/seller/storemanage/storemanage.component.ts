import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TopmenuComponent } from '../../topmenu/topmenu.component';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { UpdateproductComponent } from '../updateproduct/updateproduct.component';
import { GlobalService } from '../../../global.service';
import { Product } from '../../product';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-storemanage',
  templateUrl: './storemanage.component.html',
  styleUrls: ['./storemanage.component.scss']
})
export class StoremanageComponent implements OnInit {
  products: Product[] = [];
  iframe: SafeResourceUrl;
  constructor(private http: Http,
    public dialog: MatDialog,
    public global: GlobalService,
    private sanitizer: DomSanitizer) { }

  openAddProductDialog(): void {
    let dialogRef = this.dialog.open(AddproductComponent, {
      width: '736px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllProduct();
    });
  }

  update(product): void {
    let dialogRef = this.dialog.open(UpdateproductComponent, {
      width: '368px',
      data: product,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.getAllProduct();
    });
  }

  getAllProduct(): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    this.http.get('/api/get/product/' + this.global.id, { headers: headers }).subscribe(
      (jsonData) => {
        this.products = [];
        let jsonDataBody = jsonData.json();
        for (let entry of jsonDataBody) {
          console.log(entry);
          let r: Product = {
            id: entry[0],
            name: entry[1],
            amount: entry[2],
            basic: entry[4],
            price: entry[3],
            author: entry[7],
            description: entry[8],
            ISBN: entry[9],
            storeid: entry[6],
            store: '',
            kindid: entry[5],
            kind: '',
            image: this.global.imageURL + entry[0] + '.jpg'
          };
          this.products.push(r);
        };
        console.log(this.products);
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  ngOnInit() {
    this.getAllProduct();
  }

}
