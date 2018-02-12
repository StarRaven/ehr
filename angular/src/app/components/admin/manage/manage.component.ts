import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Category } from '../../category';
import { RegionEx } from '../../regionex';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ManageComponent implements OnInit {
  displayedColumns1 = ['kindid', 'kindname', 'operations'];
  displayedColumns2 = ['regionid', 'regionname', 'managername', 'operations'];
  displayedColumns3 = ['categoryid', 'categoryname', 'operations'];
  dataSourceKind = new MatTableDataSource<Category>();
  dataSourceRegion = new MatTableDataSource<RegionEx>();
  dataSourceCategory = new MatTableDataSource<Category>();
  categories: Category[] = [];
  regions: RegionEx[] = [];
  companys: Category[] = [];
  kind_add: string;
  region_add: string;
  region_manager: string;
  category_add: string;

  constructor(
    private http: Http,
  ) { }

  deleteKind(id){
    let body = JSON.stringify({ KindID: id });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post('/api/delete/kind', body, { headers: headers }).subscribe(
      (jsonData) => {
        let jsonDataBody = jsonData.json();
        if (jsonDataBody.deletestatus) {
          this.getAllKind();
        }
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  addKind(){
    let body = JSON.stringify({ KindName: this.kind_add });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post('/api/add/kind', body, { headers: headers }).subscribe(
      (jsonData) => {
        let jsonDataBody = jsonData.json();
        if (jsonDataBody.addstatus) {
          this.getAllKind();
          this.kind_add = '';
        }
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  getAllKind(){
    let headers = new Headers({ 'Content-Type': 'application/json' });

    this.http.get('/api/get/kind', { headers: headers }).subscribe(
      (jsonData) => {
        this.categories = [];
        let jsonDataBody = jsonData.json();
        for (let entry of jsonDataBody) {
          let r: Category = {
            id: entry[0],
            name: entry[1]
          };
          this.categories.push(r);
        };
        console.log(this.categories);
        this.dataSourceKind = new MatTableDataSource<Category>(this.categories);
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  deleteRegion(id){
    let body = JSON.stringify({ RegionID: id });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post('/api/delete/region', body, { headers: headers }).subscribe(
      (jsonData) => {
        let jsonDataBody = jsonData.json();
        if (jsonDataBody.deletestatus) {
          this.getAllRegion();
        }
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  addRegion(){
    let body = JSON.stringify({ RegionName: this.region_add, ManagerName: this.region_manager });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post('/api/add/region', body, { headers: headers }).subscribe(
      (jsonData) => {
        let jsonDataBody = jsonData.json();
        if (jsonDataBody.addstatus) {
          this.getAllRegion();
          this.region_add = '';
          this.region_manager = '';
        }
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  getAllRegion(){
    let headers = new Headers({ 'Content-Type': 'application/json' });

    this.http.get('/api/get/region', { headers: headers }).subscribe(
      (jsonData) => {
        this.regions = [];
        let jsonDataBody = jsonData.json();
        for (let entry of jsonDataBody) {
          let r: RegionEx = {
            id: entry[0],
            name: entry[1],
            manager: entry[2],
          };
          this.regions.push(r);
        };
        console.log(this.regions);
        this.dataSourceRegion = new MatTableDataSource<RegionEx>(this.regions);
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  deleteCategory(id){
    let body = JSON.stringify({ CategoryID: id });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post('/api/delete/category', body, { headers: headers }).subscribe(
      (jsonData) => {
        let jsonDataBody = jsonData.json();
        if (jsonDataBody.deletestatus) {
          this.getAllCategory();
        }
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  addCategory(){
    let body = JSON.stringify({ CategoryName: this.category_add });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post('/api/add/category', body, { headers: headers }).subscribe(
      (jsonData) => {
        let jsonDataBody = jsonData.json();
        if (jsonDataBody.addstatus) {
          this.getAllCategory();
          this.category_add = '';
        }
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  getAllCategory(){
    let headers = new Headers({ 'Content-Type': 'application/json' });

    this.http.get('/api/get/category', { headers: headers }).subscribe(
      (jsonData) => {
        this.companys = [];
        let jsonDataBody = jsonData.json();
        for (let entry of jsonDataBody) {
          let r: Category = {
            id: entry[0],
            name: entry[1]
          };
          this.companys.push(r);
        };
        console.log(this.categories);
        this.dataSourceCategory = new MatTableDataSource<Category>(this.companys);
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  ngOnInit() {
    this.kind_add = '';
    this.region_add = '';
    this.region_manager = '';
    this.category_add = '';
    this.getAllKind();
    this.getAllRegion();
    this.getAllCategory();
  }

}
