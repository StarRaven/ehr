import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {QuestionBase} from '../question-base';
import { Router, ActivatedRoute } from '@angular/router';

import { GlobalService} from '../../global.service';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  
  constructor(
    private router: Router,
    private global: GlobalService,
  ) {
  }

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
  getChar(num: number): String  {
    num = +num;
    num = 97 + num;
    return String.fromCharCode(num);
  }
  abs(num: number): number {
    return Math.abs(num);
  }
  goForm(id: number) {
    this.router.navigate(['doctor/form/', { id: id+100, search: '' }])
  }
  removeBR(s: string) {
    while (s.search(' <br /> ') > 0)
      s = s.replace(' <br /> ',' ');
    return s;
  }
  relpaceBR(s: string) {
    while (s.search(' <br /> ') > 0)
      s = s.replace(' <br /> ','\n');
    return s;
  }
}
