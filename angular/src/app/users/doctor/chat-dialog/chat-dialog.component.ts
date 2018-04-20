import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';

let CHAT_ROOT_URL = "http://localhost:3003"

if(environment.production){
  CHAT_ROOT_URL = "http://shrsft6029himb.shrs.pitt.edu:8002"
}

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit {

  chatUrl:SafeUrl

  constructor(
    public dialogRef:MatDialogRef<ChatDialogComponent>,
    @Inject(MAT_DIALOG_DATA)  public data,
    public sanitizer:DomSanitizer
  ) {
    this.chatUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${CHAT_ROOT_URL}/chat/${data.patientId}/${data.user}`)
    console.log(this.chatUrl);
  }

  ngOnInit() {
  }

}
