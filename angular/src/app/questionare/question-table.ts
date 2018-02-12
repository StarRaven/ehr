import {QuestionBase} from './question-base';

export class TableQuestion extends QuestionBase<string> {
  controlType = 'table';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
