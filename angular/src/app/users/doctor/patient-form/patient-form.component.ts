import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {QuestionService} from '../../../questionare/question.service';

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
    service: QuestionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.questions = service.getQuestions();
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id']) {
      }
      if (params['search']) {
        this.filter = params['search'];
      }
    });
  }
  ngOnInit() {}
}
