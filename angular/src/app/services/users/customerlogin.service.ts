import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomerLoginService {
  constructor(private http: Http) { }

  login(user) {
    let body = JSON.stringify({ username: user.username, password: user.password, role: "role" });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('/api/login/customer', body, { headers: headers })
      .map(response => response.json());
  }

}
