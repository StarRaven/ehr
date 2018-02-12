import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { TopmenuComponent } from '../../topmenu/topmenu.component';
import { GlobalService } from '../../../global.service';
import { Product } from '../../product';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ShowDetailComponent } from '../show-detail/show-detail.component';
import { Category } from '../../category';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingComponent implements OnInit {
  products: Product[] = [];
  displayedColumns = ['prod'];
  dataSource = new MatTableDataSource<Product>();
  categories: Category[] = [];
  cat: string;
  filtervalue: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  /*
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
  */
  constructor(private http: Http,
    public global: GlobalService,
    private sanitizer: DomSanitizer,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllProduct();
    this.getAllCategory();
    this.cat = 'all';
    this.filtervalue = '';
  }

  getAllCategory() {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    this.http.get('/api/get/kind', { headers: headers }).subscribe(
      (jsonData) => {
        let jsonDataBody = jsonData.json();
        for (let entry of jsonDataBody) {
          let r: Category = {
            id: entry[0],
            name: entry[1]
          };
          this.categories.push(r);
        };
        console.log(this.categories);
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  CategoryFilter(): void {
    var t_cat = this.cat;
    function FilterByCategory(obj) {
      console.log(t_cat);
      if (t_cat == "all")
        return true;
      return obj.kind === t_cat;
    };
    this.dataSource = new MatTableDataSource<Product>(this.products.filter(FilterByCategory));
  }

  getAllProduct(): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    this.http.get('/api/get/product', { headers: headers }).subscribe(
      (jsonData) => {
        this.products = [];
        let jsonDataBody = jsonData.json();
        for (let entry of jsonDataBody) {
          console.log(entry);
          let r: Product = {
            id: entry[0],
            name: entry[1],
            amount: entry[2],
            price: entry[3],
            basic: entry[4],
            author: entry[5],
            description: entry[6],
            ISBN: entry[7],
            storeid: entry[8],
            store: entry[9],
            kindid: entry[10],
            kind: entry[11],
            image: this.global.imageURL + entry[0] + '.jpg'
          };
          this.products.push(r);
        };
        this.dataSource = new MatTableDataSource<Product>(this.products);
        console.log(this.products);
        this.dataSource.paginator = this.paginator;
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  showDetail(product): void {
    //console.log(product);
    let dialogRef = this.dialog.open(ShowDetailComponent, {
      width: '1104px',
      data: product,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == "buy")
        this.getAllProduct();
      else if (result == "filter") {
        this.filtervalue = product.store;
        this.applyFilter(product.store);
      }
    });
  }
}
