import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {QuestionService} from '../../../questionare/question.service';

@Component({
  selector: 'app-patient-form-add',
  templateUrl: './patient-form-add.component.html',
  styleUrls: ['./patient-form-add.component.scss'],
  providers: [QuestionService]
})
export class PatientFormAddComponent implements OnInit {

  questions: any[];

  constructor(service: QuestionService, private router: Router) {
    this.questions = service.getQuestions();
    for (let q of this.questions) {
      q.value = '';
    }
  }

  ngOnInit() {}

}
