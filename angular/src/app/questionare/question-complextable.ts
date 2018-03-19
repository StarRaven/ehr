import {QuestionBase} from './question-base';

export class ComplexTableQuestion extends QuestionBase<string> {
  controlType = 'complextable';
  contents: Array<Array<Array<any>>> = [];
  constructor(contents: {} = {}) {
    super(contents);
    this.contents = contents['contents'] || [];
  }
}
