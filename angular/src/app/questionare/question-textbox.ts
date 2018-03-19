import {QuestionBase} from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;
  suffix: string;

  constructor(suffix: {} = {}) {
    super(suffix);
    this.suffix = suffix['suffix'] || '';
  }
}
