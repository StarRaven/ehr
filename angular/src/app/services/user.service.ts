import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { GlobalService } from '../global.service';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
    private global: GlobalService
  ) { }

  getPatientList() {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this.global.server + '/patients', { headers: headers })
      .map(response => response);
  }

  getPatient(id: number) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this.global.server + '/patients/' + id, { headers: headers })
      .map(response => response);
  }

}
