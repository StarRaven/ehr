import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class DeletesalesmanService {

  constructor(private http: Http) { }

  delete(id) {
    let body = JSON.stringify({ SalespersonID: id });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('/api/salesman/delete', body, { headers: headers })
      .map(response => response.json());
  }

}
