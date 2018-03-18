import {QuestionBase} from './question-base';

export class SimpleTableQuestion extends QuestionBase<string> {
  controlType = 'simpletable';
  contents: Array<Array<any>> = [];
  constructor(contents: {} = {}) {
    super(contents);
    this.contents = contents['contents'] || [];
  }
}
