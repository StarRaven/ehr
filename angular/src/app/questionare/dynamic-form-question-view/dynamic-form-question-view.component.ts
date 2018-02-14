import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {QuestionBase} from '../question-base';

@Component({
  selector: 'app-dynamic-form-question-view',
  templateUrl: './dynamic-form-question-view.component.html',
  styleUrls: ['./dynamic-form-question-view.component.scss']
})
export class DynamicFormQuestionViewComponent {

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

}
