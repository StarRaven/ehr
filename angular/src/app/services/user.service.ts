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

  getPatientMedia(id: number) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this.global.server + 'media/' + id, { headers: headers })
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
        (err) => reject(err),
        // The 3rd callback handles the "complete" event.
        () => {
        });
    });
    return promise;
  }

  tryPatientMediaVideo(id: number, formData: FormData) {
    let promise = new Promise((resolve, reject) => {
      let path = '';
      const headers1 = new Headers({});
      this.http.post(this.global.server + 'upload-video-video', formData, { headers: headers1 }).subscribe(
        (jsonData) => {
          path = jsonData.json().path;
          resolve(path);
        },
        (err) => reject(err),
        () => {
        });
    });
    return promise;
  }

  uploadPatientMediaVideo(id: number, formData: FormData, thumbnail: FormData, desc: string) {
    let thumbPath = '';
    let promise = new Promise((resolve, reject) => {
      let path = '';
      const headers1 = new Headers({});
      this.http.post(this.global.server + 'upload-video-video', formData, { headers: headers1 }).subscribe(
        (jsonData) => {
          path = jsonData.json().path;
        },
        (err) => reject(err),
        () => {
          const headers1 = new Headers({});
          this.http.post(this.global.server + 'upload-video-thumb', thumbnail, { headers: headers1 }).subscribe(
            (jsonData) => {
              thumbPath = jsonData.json().path;
            },
            (err) => reject(err),
            () => {
              console.log(thumbPath);
              let body = null;
              const headers = new Headers({ 'Content-Type': 'application/json' });
              this.http.get(this.global.server + 'media/' + id, { headers: headers }).subscribe(
                (jsonData) => {
                  let jsonDataBody = jsonData.json();
                  jsonDataBody.videos.push({
                    thumbnail: thumbPath,
                    src: path,
                    desc: desc
                  })
                  body = jsonDataBody;
                  console.log(body);
                },
                (err) => reject(err),
                () => {
                  this.http.patch(this.global.server + 'media/' + id, JSON.stringify(body), { headers: headers }).subscribe(
                    (jsonData) => {
                    },
                    (err) => reject(err),
                    () => { resolve(); });
                });
            });
        });
    });
    return promise;
  }

  /*
  tryPatientMediaImage(id: number, formData: FormData) {
    let promise = new Promise((resolve, reject) => {
      let path = '';
      const headers1 = new Headers({});
      this.http.post(this.global.server + 'upload-image', formData, { headers: headers1 }).subscribe(
        (jsonData) => {
          path = jsonData.json().path;
          resolve(path);
        },
        (err) => reject(err),
        () => {
        });
    });
    return promise;
  }
*/

  uploadPatientMediaImage(id: number, formData: FormData, desc: string) {
    let promise = new Promise((resolve, reject) => {
      let path = '';
      let body = null;
      const headers1 = new Headers({});
      this.http.post(this.global.server + 'upload-image', formData, { headers: headers1 }).subscribe(
        (jsonData) => {
          path = jsonData.json().path;
        },
        (err) => reject(err),
        () => {
          const headers = new Headers({ 'Content-Type': 'application/json' });
          this.http.get(this.global.server + 'media/' + id, { headers: headers }).subscribe(
            (jsonData) => {
              let jsonDataBody = jsonData.json();
              jsonDataBody.pictures.push({
                thumbnail: path,
                src: path,
                desc: desc
              })
              body = jsonDataBody;
            },
            (err) => reject(err),
            () => {
              this.http.patch(this.global.server + 'media/' + id, JSON.stringify(body), { headers: headers }).subscribe(
                (jsonData) => {
                },
                (err) => reject(err),
                () => { resolve(); });
            });
        });
    });
    return promise;
  }
  /*
    tryPatientMediaAudio(id: number, formData: FormData) {
      let promise = new Promise((resolve, reject) => {
        let path = '';
        const headers1 = new Headers({});
        this.http.post(this.global.server + 'upload-audio', formData, { headers: headers1 }).subscribe(
          (jsonData) => {
            path = jsonData.json().path;
            resolve(path);
          },
          (err) => reject(err),
          () => {
          });
      });
      return promise;
    }
  */
  uploadPatientMediaAudio(id: number, formData: FormData, desc: string) {
    let body = null;
    let promise = new Promise((resolve, reject) => {
      let path = '';
      const headers1 = new Headers({});
      this.http.post(this.global.server + 'upload-audio', formData, { headers: headers1 }).subscribe(
        (jsonData) => {
          path = jsonData.json().path;
        },
        (err) => reject(err),
        () => {
          const headers = new Headers({ 'Content-Type': 'application/json' });
          this.http.get(this.global.server + 'media/' + id, { headers: headers }).subscribe(
            (jsonData) => {
              let jsonDataBody = jsonData.json();
              jsonDataBody.audios.push({
                src: path,
                desc: desc
              })
              body = jsonDataBody;
            },
            (err) => reject(err),
            () => {
              this.http.patch(this.global.server + 'media/' + id, JSON.stringify(body), { headers: headers }).subscribe(
                (jsonData) => {
                },
                (err) => reject(err),
                () => { resolve(); });
            });
        });
    });
    return promise;
  }

  deleteMediaFile(src: string) {
    let promise = new Promise((resolve, reject) => {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      this.http.post(this.global.server + 'delete-media-file', { "path": src }, { headers: headers }).subscribe(
        (jsonData) => {
          //console.log(jsonData.json());
        },
        (err) => reject(err),
        () => {
          console.log('delete media file success');
          resolve();
        });
    });
    return promise;
  }

  deleteMediaDB(id: number, src: string) {
    let body = null;
    let promise = new Promise((resolve, reject) => {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      this.http.get(this.global.server + 'media/' + id, { headers: headers }).subscribe(
        (jsonData) => {
          body = jsonData.json();
          console.log('deleting...');
          console.log(body);
          for (var i = 0; i < body.pictures.length; i++) {
            //src include localhost:3000
            if (src === body.pictures[i].src) {
              body.pictures.splice(i, 1);
            }
          }
          for (var i = 0; i < body.audios.length; i++) {
            if (src === body.audios[i].src) {
              body.audios.splice(i, 1);
            }
          }
          for (var i = 0; i < body.videos.length; i++) {
            if (src === body.videos[i].src) {
              body.videos.splice(i, 1);
            }
          }
          console.log(body);
        },
        (err) => reject(err),
        () => {
          this.http.patch(this.global.server + 'media/' + id, JSON.stringify(body), { headers: headers }).subscribe(
            (jsonData) => {
            },
            (err) => reject(err),
            () => { resolve(); });
        });
    });
    return promise;
  }

  /*
  deletePatient(id: number) {
    let promise = new Promise((resolve, reject) => {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      this.http.post(this.global.server + 'delete-patient', {id}, { headers: headers }).subscribe(
        (jsonData) => {
        },
        (err) => reject(err),
        () => {
        });
    });
    return promise;
  }*/

  deletePatient(id: number) {
    let patientFormId = -1;
    let formId = -1;
    let avatarPath = "";
    let promise = new Promise((resolve, reject) => {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      this.http.get(this.global.server + 'patients/' + id, { headers: headers }).subscribe(
        (jsonData) => {
          avatarPath = jsonData.json().avatar;
          // console.log(jsonDataBody);
        },
        (err) => reject(err),
        () => {
          // console.log('get avatar path success');
          this.http.delete(this.global.server + 'patients/' + id).subscribe(
            (jsonData) => {
            },
            (err) => reject(err),
            () => {
              //console.log('delete patient success');
              this.http.get(this.global.server + 'patient-form?patientID=' + id, { headers: headers }).subscribe(
                (jsonData) => {
                  let jsonDataBody = jsonData.json();
                  patientFormId = jsonDataBody[0].id;
                  formId = jsonDataBody[0].formID;
                  //console.log(jsonData.json());
                },
                (err) => reject(err),
                () => {
                  //console.log('get patient-form id success');
                  this.http.delete(this.global.server + 'patient-form/' + patientFormId).subscribe(
                    (jsonData) => {
                      //console.log(jsonData.json());
                    },
                    (err) => reject(err),
                    () => {
                      // console.log("delete patient-form success");
                      this.http.delete(this.global.server + 'forms/' + formId).subscribe(
                        (jsonData) => {
                          //console.log(jsonData.json());
                        },
                        (err) => reject(err),
                        () => {
                          //console.log("delete form success");
                          console.log(avatarPath);
                          const headers = new Headers({ 'Content-Type': 'application/json' });
                          this.http.post(this.global.server + 'delete-patient-file', { "path": avatarPath }, { headers: headers }).subscribe(
                            (jsonData) => {
                              //console.log(jsonData.json());
                            },
                            (err) => reject(err),
                            () => {
                              console.log('delete avatar success');
                              resolve();
                            });
                        });
                    });
                });
            });
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
          console.log(jsonDataBody);
          formid = jsonDataBody.id;
          patient = {
            "avatar": "",
            "name": jsonDataBody.data[2].value,
            "number": jsonDataBody.data[1].value,
            "status": "",
            "birthday": jsonDataBody.data[4].value
          };
          console.log(patient);
        },
        // The 2nd callback handles errors.
        (err) => reject(err),
        // The 3rd callback handles the "complete" event.
        () => {
          this.http.post(this.global.server + 'patients', JSON.stringify(patient), { headers: headers }).subscribe(
            (jsonData) => {
              patientid = jsonData.json().id;
            },
            (err) => reject(err),
            () => {
              let patientForm = {
                "patientID": patientid,
                "formID": formid
              };
              this.http.post(this.global.server + 'patient-form', JSON.stringify(patientForm), { headers: headers }).subscribe(
                (jsonData) => {
                  resolve(patientid);
                },
                (err) => reject(err),
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
