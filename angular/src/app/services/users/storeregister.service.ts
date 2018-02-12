import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class StoreRegisterService {

  constructor(private http: Http) { }

  register(user) {
    console.log(user);
    let body = JSON.stringify({ Street: user.Street, City: user.City, State: user.State, ZipCode: user.ZipCode, StoreName: user.StoreName, Password: user.Password, ManagerName: user.ManagerName, RegionID: user.RegionID });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('/api/register/store', body, { headers: headers })
      .map(response => response.json());
  }

}
