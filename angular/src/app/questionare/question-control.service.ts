import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';
import { Title } from './question-title';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    const group: any = {};

    questions.forEach(question => {
      if (!(question instanceof Title)) {
        group[question.key] = question.required ?
          new FormControl(question.value || '', Validators.required) :
          new FormControl(question.value || '');
      }
    });
    return new FormGroup(group);
  }
}
