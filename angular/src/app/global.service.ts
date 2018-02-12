import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  username: string;
  login : boolean;
  id : string;
  role : string;

  imageURL : string;

  constructor() {
    this.username = '';
    this.login = false;
    this.id = '';
    this.role = '';
    this.imageURL = 'http://localhost:8000/images/';
  }

}
