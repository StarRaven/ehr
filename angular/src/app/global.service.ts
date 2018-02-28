import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  username: string;
  login: boolean;
  role: string;
  theme: string;
  patientName: string;
  patientAvator: string;
  constructor() {
    this.username = '';
    this.login = false;
    this.role = '';
    this.theme = 'custom-theme-1';
    this.patientAvator = '';
    this.patientName = '';
  }

}
