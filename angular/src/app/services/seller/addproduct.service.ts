import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class AddproductService {

  constructor(private http: Http) { }

  add(product) {
    console.log(product);
    let body = JSON.stringify({ ImageBase64: product.ImageBase64, Name: product.Name , Author: product.Author ,ISBN: product.ISBN ,Description: product.Description ,Amount: product.Amount , Price: product.Price , Basic: product.Basic , KindID: product.KindID , StoreID: product.StoreID });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('/api/product/add', body, { headers: headers })
      .map(response => response.json());
  }

}
