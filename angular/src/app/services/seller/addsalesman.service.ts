import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class AddsalesmanService {

  constructor(private http: Http) { }

  add(salesman) {
    console.log(salesman);
    let body = JSON.stringify({ Name: salesman.Name , Password: salesman.Password ,Street: salesman.Street ,City: salesman.City ,State: salesman.State , Zipcode: salesman.Zipcode , Email: salesman.Email , Job: salesman.Job , Salary: salesman.Salary, StoreID: salesman.StoreID });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('/api/salesman/add', body, { headers: headers })
      .map(response => response.json());
  }

}
