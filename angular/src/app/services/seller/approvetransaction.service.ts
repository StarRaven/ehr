import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ApprovetransactionService {

  constructor(private http: Http) { }

  approve(approvetransaction) {
    let body = JSON.stringify({ TransactionID: approvetransaction.TransactionID, SalespersonID: approvetransaction.SalespersonID });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('/api/transaction/approve', body, { headers: headers })
      .map(response => response.json());
  }

}
