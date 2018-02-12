export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  desc: string;
  comments: string;
  required: boolean;
  order: number;
  group: number;
  controlType: string;
  layout: string;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    desc?: string;
    comments?: string;
    required?: boolean,
    order?: number,
    group?: number,
    controlType?: string,
    layout?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.desc = options.desc || '';
    this.comments = options.comments || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.group = options.group === undefined ? 0 : options.group;
    this.controlType = options.controlType || '';
    this.layout = options.layout || '';
  }
}
