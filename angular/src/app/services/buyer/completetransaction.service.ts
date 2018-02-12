import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class CompletetransactionService {

  constructor(private http: Http) { }

  complete(completetransaction) {
    let body = JSON.stringify({ TransactionID: completetransaction.TransactionID});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('/api/transaction/complete', body, { headers: headers })
      .map(response => response.json());
  }

}
