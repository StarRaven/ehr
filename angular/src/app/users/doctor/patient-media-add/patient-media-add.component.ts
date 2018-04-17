import { Component, OnInit, Inject } from '@angular/core';
import { GlobalService } from '../../../global.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../../services/user.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-patient-media-add',
  templateUrl: './patient-media-add.component.html',
  styleUrls: ['./patient-media-add.component.scss']
})
export class PatientMediaAddComponent implements OnInit {
  public audioSrc = '';
  public audioFormData: any;
  public audioDesc = '';
  public audioSrcRaw = '';
  public imageSrc = '';
  public imageFormData: any;
  public imageDesc = '';
  public imageSrcRaw = '';
  public videoSrc = '';
  public videoFormData: any;
  public videoDesc = '';
  public videoSrcRaw = '';
  private video: any;
  private id = -1;
  constructor(
    private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<PatientMediaAddComponent>,
    public global: GlobalService,
    private us: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.id = data;
  }

  ngOnInit() {
  }

  dataURItoBlob(dataURI) {
    const binary = atob(dataURI.split(',')[1]);
    const array = [];
    for (let i = 0; i < binary.length; i += 1) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/png' });
  }

  previewVideo($event) {
    /*
    this.videoSrcRaw = $event.target.value;
    const files = $event.target.files || $event.srcElement.files;
    const file = files[0];
    this.video = file;
    const formData = new FormData();
    formData.append('video-video', file, file.name);
    this.us.tryPatientMediaVideo(this.id, formData).then((result) => {
      this.videoSrc = result.toString();
    });
    */
    this.videoSrcRaw = $event.target.value;
    const files = $event.target.files || $event.srcElement.files;
    const file = files[0];
    this.videoSrc = URL.createObjectURL(file);

    this.videoFormData = new FormData();
    console.log(file);
    this.videoFormData.append('video-video', file, file.name);
  }

  uploadVideo() {
    const video = document.createElement('video');
    let self = this;
    video.addEventListener('loadedmetadata', function loadedmetadata() {
      setTimeout(() => {
        const canvas = document.createElement('canvas');
        canvas.width = this.videoWidth;
        canvas.height = this.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(this, 0, 0);
        const image = new Image();
        image.src = canvas.toDataURL('image/png');
        image.onload = function () {
          const formData = new FormData();
          formData.append('video-thumb', self.dataURItoBlob(canvas.toDataURL('image/png')), `${+new Date()}.png`);
          self.us.uploadPatientMediaVideo(self.id, self.videoFormData, formData, self.videoDesc).then((result) => {
            self.dialogRef.close();
          });
        }
      }, 300);
    }, false);
    video.src = this.videoSrc;
  }

  previewImage($event) {
    /*
    this.imageSrcRaw = $event.target.value;
    const files = $event.target.files || $event.srcElement.files;
    const file = files[0];
    const formData = new FormData();
    console.log(file);
    formData.append('image', file, file.name);
    this.us.tryPatientMediaImage(this.id, formData).then((result) => {
      this.imageSrc = result.toString();
    });*/
    this.imageSrcRaw = $event.target.value;
    const files = $event.target.files || $event.srcElement.files;
    const file = files[0];
    this.imageSrc = URL.createObjectURL(file);

    this.imageFormData = new FormData();
    console.log(file);
    this.imageFormData.append('image', file, file.name);
  }

  uploadImage() {
    this.us.uploadPatientMediaImage(this.id, this.imageFormData, this.imageDesc).then((result) => {
      this.dialogRef.close();
    });
  }

  previewAudio($event) {
    /*
    this.audioSrcRaw = $event.target.value;
    const files = $event.target.files || $event.srcElement.files;
    const file = files[0];
    const formData = new FormData();
    console.log(file);
    formData.append('audio', file, file.name);
    this.us.tryPatientMediaAudio(this.id, formData).then((result) => {
      this.audioSrc = result.toString();
    });
    */
    this.audioSrcRaw = $event.target.value;
    const files = $event.target.files || $event.srcElement.files;
    const file = files[0];
    this.audioSrc = URL.createObjectURL(file);

    this.audioFormData = new FormData();
    console.log(file);
    this.audioFormData.append('audio', file, file.name);
  }

  uploadAudio() {
    this.us.uploadPatientMediaAudio(this.id, this.audioFormData, this.audioDesc).then((result) => {
      this.dialogRef.close();
    });
  }
}
