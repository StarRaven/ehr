import {QuestionBase} from './question-base';

export class LinkTableQuestion extends QuestionBase<string> {
  controlType = 'linktable';
  contents: Array<Array<any>> = [];
  constructor(contents: {} = {}) {
    super(contents);
    this.contents = contents['contents'] || [];
  }
}
