import { QuestionBase } from './question-base';

export class FreeText extends QuestionBase<string> {
  controlType = 'freetext';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
