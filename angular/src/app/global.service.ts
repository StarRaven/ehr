import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';



@Injectable()
export class GlobalService {
  username: string;
  chatUsername:string
  login: boolean;
  role: string;
  theme: string;
  patientName: string;
  patientAvator: string;
  primaryColor: string;
  accentColor: string;
  lightColor: string;
  server = "http://localhost:3000/";

  constructor() {
    this.username = 'doctor';
    this.login = false;
    this.role = 'doctor';
    this.theme = 'custom-theme-3';
    this.patientAvator = '/assets/avatars/100.png';
    this.patientName = 'Yemima Tabuni';
    this.primaryColor = "#1A4457";
    this.accentColor = "#59ADD3";
    this.lightColor = "#CEE8F3";
    if(environment.production){
      this.server = "/"
    }
    //this.patientAvator = '/assets/avatars/101.png';
    //this.patientName = 'Simon Magai';
    //this.patientAvator = '/assets/avatars/102.png';
    //this.patientName = 'Maria Magai';
  }

}
