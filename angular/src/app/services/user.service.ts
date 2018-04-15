import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
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
    return this.http.get(this.global.server + 'patients', { headers: headers })
      .map(response => response);
  }

  getPatient(id: number) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this.global.server + 'patients/' + id, { headers: headers })
      .map(response => response);
  }

  updatePatientAvatar(id: number, formData: FormData) {
    let promise = new Promise((resolve, reject) => {
    let path = '';
    const headers1 = new Headers({});
    this.http.post(this.global.server + 'upload-avatar', formData, { headers: headers1 }).subscribe(
      (jsonData) => {
        path = jsonData.json().path;
        console.log(path);
        let body = JSON.stringify({ "avatar": path });
        const headers2 = new Headers({ 'Content-Type': 'application/json' });
        this.http.patch(this.global.server + 'patients/' + id, body, { headers: headers2 }).subscribe(
          (jsonData) => {
            console.log(jsonData.json());
          },
          // The 2nd callback handles errors.
          (err) => reject(err),
          // The 3rd callback handles the "complete" event.
          () => { resolve(); });
      },
      // The 2nd callback handles errors.
      (err) => console.log(err),
      // The 3rd callback handles the "complete" event.
      () => {
        
      });
    
  });
  return promise;
  }

  addPatient(form: any) {
    let formid = -1;
    let patientid = -1;
    let patient = {};
    let promise = new Promise((resolve, reject) => {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      this.http.post(this.global.server + 'forms', JSON.stringify(form), { headers: headers }).subscribe(
        (jsonData) => {
          let jsonDataBody = jsonData.json();
          formid = jsonDataBody.id;
          patient = {
            "avatar": "",
            "name": jsonDataBody.data[2].value,
            "number": jsonDataBody.data[1].value,
            "gender": "",
            "birthday": ""
          };
        },
        // The 2nd callback handles errors.
        (err) => reject(err),
        // The 3rd callback handles the "complete" event.
        () => {
          this.http.post(this.global.server + 'patients', JSON.stringify(patient), { headers: headers }).subscribe(
            (jsonData) => {
              patientid = jsonData.json().id;
            },
            // The 2nd callback handles errors.
            (err) => reject(err),
            // The 3rd callback handles the "complete" event.
            () => {
              let patientForm = {
                "patientID": patientid,
                "formID": formid
              };
              this.http.post(this.global.server + 'patient-form', JSON.stringify(patientForm), { headers: headers }).subscribe(
                (jsonData) => {
                  resolve(patientid);
                },
                // The 2nd callback handles errors.
                (err) => reject(err),
                // The 3rd callback handles the "complete" event.
                () => console.log('observable complete')
              );
            }
          );
        }
      );
    });
    return promise;
  }

}
