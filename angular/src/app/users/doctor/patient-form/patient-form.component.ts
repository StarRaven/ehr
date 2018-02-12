import {Component, Input, OnInit} from '@angular/core';

import {QuestionService} from '../../../questionare/question.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss'],
  providers: [QuestionService]
})
export class PatientFormComponent implements OnInit {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {}
}
