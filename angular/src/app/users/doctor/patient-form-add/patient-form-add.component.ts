import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { QuestionService } from '../../../questionare/question.service';
import { GlobalService} from '../../../global.service';

@Component({
  selector: 'app-patient-form-add',
  templateUrl: './patient-form-add.component.html',
  styleUrls: ['./patient-form-add.component.scss'],
  providers: [QuestionService]
})
export class PatientFormAddComponent implements OnInit {

  questions: any[];

  constructor(
    private _location: Location,
    service: QuestionService,
    private router: Router,
    private global: GlobalService
  ) {
    this.questions = service.getQuestions(1);
    for (const q of this.questions) {
      q.value = '';
    }
  }

  goBack() {
    this._location.back();
  }

  ngOnInit() {}

}
