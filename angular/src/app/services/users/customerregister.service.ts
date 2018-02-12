import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class CustomerRegisterService {

  constructor(private http: Http) { }

  register(user) {
    console.log(user);
    let body = JSON.stringify({ Username: user.Username, Password: user.Password, Street: user.Street, City: user.City, State: user.State, ZipCode: user.ZipCode, Kind: user.Kind, Marriage: user.Marriage, Gender: user.Gender, Age: user.Age, Income: user.Income, CategoryID: user.CategoryID, Companyincome: user.Companyincome });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('/api/register/customer', body, { headers: headers })
      .map(response => response.json());
  }

}
