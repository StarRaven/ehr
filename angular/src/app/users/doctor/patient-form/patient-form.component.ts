import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../questionare/question.service';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss'],
  providers: [QuestionService]
})
export class PatientFormComponent implements OnInit {
  questions: any[];
  filter: string;

  constructor (
    private _location: Location,
    service: QuestionService,
    private route: ActivatedRoute,
    private router: Router,
    private global: GlobalService
  ) {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id']) {
        this.questions = service.getQuestions(Number(params['id']));
      }
      if (params['search']) {
        this.filter = params['search'];
      }
    });
  }

  goBack() {
    this._location.back();
  }

  ngOnInit() {}
}
