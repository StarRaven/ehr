import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class CanceltransactionService {

  constructor(private http: Http) { }

  cancel(canceltransaction) {
    let body = JSON.stringify({ TransactionID: canceltransaction.TransactionID, SalespersonID: canceltransaction.SalespersonID });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('/api/transaction/cancel', body, { headers: headers })
      .map(response => response.json());
  }

}
