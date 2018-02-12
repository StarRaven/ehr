import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class UpdateproductService {

  constructor(private http: Http) { }

  update(product) {
    console.log("yes");
    console.log(product);
    let body = JSON.stringify({ ProductID: product.ProductID, Name: product.Name , Author: product.Author ,ISBN: product.ISBN ,Description: product.Description ,Amount: product.Amount , Price: product.Price , Basic: product.Basic , KindID: product.KindID, StoreID: product.StoreID });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('/api/product/update', body, { headers: headers })
      .map(response => response.json());
  }

}
