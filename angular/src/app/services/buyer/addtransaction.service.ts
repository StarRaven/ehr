import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class AddtransactionService {

  constructor(private http: Http,) { }

  add(transaction) {
    console.log(transaction);
    let body = JSON.stringify({ ProductID: transaction.ProductID, CustomerID: transaction.CustomerID , Status: transaction.Status ,StoreID: transaction.StoreID ,Quantity: transaction.Quantity });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('/api/transaction/add', body, { headers: headers })
      .map(response => response.json());
  }
}
