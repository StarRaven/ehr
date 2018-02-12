import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  constructor(private http: Http) {}

  login(user): boolean {
    let body = JSON.stringify({ username: user.username, password: user.password, role: "role" });
    let headers = new Headers({'Content-Type': 'application/json'});
    this.http.post('/api/login', body, {headers: headers}).subscribe(data => {
      console.log(data);
    });
    return true;

  }
}
