import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class UpdatesalesmanService {

  constructor(private http: Http) { }

  update(salesman) {
    console.log(salesman);
    let body = JSON.stringify({ SalespersonID: salesman.SalespersonID, Name: salesman.Name , Password: salesman.Password ,Street: salesman.Street ,City: salesman.City ,State: salesman.State , Zipcode: salesman.Zipcode , Email: salesman.Email , Job: salesman.Job , Salary: salesman.Salary, StoreID: salesman.StoreID });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('/api/salesman/update', body, { headers: headers })
      .map(response => response.json());
  }

}
