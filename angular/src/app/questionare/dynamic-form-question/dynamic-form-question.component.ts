import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {QuestionBase} from '../question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
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
}
