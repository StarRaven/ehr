import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import { QuestionBase } from '../question-base';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-form-question-view',
  templateUrl: './dynamic-form-question-view.component.html',
  styleUrls: ['./dynamic-form-question-view.component.scss']
})
export class DynamicFormQuestionViewComponent implements OnInit {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  ngOnInit() {
  }

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  getChar(num: number): String  {
    num = +num;
    num = 97 + num;
    return String.fromCharCode(num);
  }

}
