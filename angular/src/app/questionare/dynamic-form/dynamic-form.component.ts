import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {QuestionBase} from '../question-base';
import {QuestionControlService} from '../question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit, AfterViewInit {
  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  catlogs: Catlog[] = [];
  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

  ngAfterViewInit() {
    const c0 = new Catlog();
    c0.label = 'Group ' + '1';
    c0.href = '#qForm';
    this.catlogs.push(c0);
    
    for (let i = 1; i < this.questions.length; i++) {
      if (this.questions[i - 1].group !== this.questions[i].group) {
        const element = document.getElementById('o' + this.questions[i].key);
        const c = new Catlog();
        c.label = 'Group ' + this.questions[i].group;
        c.href = '#o' + this.questions[i].key;
        this.catlogs.push(c);
        console.log(c);
        // console.log(element);
      }
    }
  }

  scroll(href: string) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView(true);
    }
  }

  checkGroup(i: number): boolean {
    if (i === 0) {
      return false;
      }
    if (this.questions[i - 1].group === 0) {
      return false;
      }
    if (this.questions[i - 1].group !== this.questions[i].group) {
      return true;
    } else {
      return false;
    }
  }
  }

class Catlog {
  label: string;
  href: string;
}
