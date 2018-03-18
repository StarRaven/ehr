import {QuestionBase} from './question-base';

export class Title extends QuestionBase<string> {
  controlType = 'title';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
