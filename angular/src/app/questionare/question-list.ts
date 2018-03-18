import {QuestionBase} from './question-base';

export class ListQuestion extends QuestionBase<string> {
  controlType = 'list';
  contents: {key: string, value: string}[] = [];

  constructor(contents: {} = {}) {
    super(contents);
    this.contents = contents['contents'] || [];
  }
}
