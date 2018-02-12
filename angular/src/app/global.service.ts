import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  username: string;
  login: boolean;
  role: string;

  constructor() {
    this.username = '';
    this.login = false;
    this.role = '';
  }

}
