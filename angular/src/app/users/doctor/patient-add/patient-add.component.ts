import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../global.service';
import { MatDialogRef } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../../questionare/question-base';
import { QuestionControlService } from '../../../questionare/question-control.service';
import { RemoteQuestionService } from '../../../questionare/remote-question.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss'],
  providers: [QuestionControlService, RemoteQuestionService]
})
export class PatientAddComponent implements OnInit {
  form: FormGroup;
  payLoad = '';
  questions: any;

  constructor(
    public global: GlobalService,
    public dialogRef: MatDialogRef<PatientAddComponent>,
    private qcs: QuestionControlService,
    private rqs: RemoteQuestionService,
    private us: UserService
  ) { }

  ngOnInit() {
    //this.questions = this.rqs.getQuestions(200);
    this.rqs.getQuestions(200).then((result) => {
      this.questions = result;
      this.form = this.qcs.toFormGroup(this.questions);
    });
    //this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    let questionsSubmit = this.questions;
    let jsonAll = this.rqs.QuestionsToJson(questionsSubmit);
    for (let json of jsonAll.data) {
      json["value"] = this.form.value[json["key"]];
    }
    this.us.addPatient(jsonAll).then((id) => {
      this.dialogRef.close();
    });
  }
  


}
