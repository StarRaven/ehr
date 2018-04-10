import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  username: string;
  login: boolean;
  role: string;
  theme: string;
  patientName: string;
  patientAvator: string;
  accentColor: string;

  server = "http://localhost:3000";
  
  constructor() {
    this.username = 'doctor';
    this.login = false;
    this.role = 'doctor';
    this.theme = 'custom-theme-3';
    this.patientAvator = '/assets/avatars/100.png';
    this.patientName = 'Yemima Tabuni';
    this.accentColor = "#59ADD3";
    //this.patientAvator = '/assets/avatars/101.png';
    //this.patientName = 'Simon Magai';
    //this.patientAvator = '/assets/avatars/102.png';
    //this.patientName = 'Maria Magai';
  }

}
