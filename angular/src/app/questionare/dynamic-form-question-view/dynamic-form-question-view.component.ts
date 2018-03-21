import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import { QuestionBase } from '../question-base';
import { Router, ActivatedRoute } from '@angular/router';

import { GlobalService} from '../../global.service';

@Component({
  selector: 'app-dynamic-form-question-view',
  templateUrl: './dynamic-form-question-view.component.html',
  styleUrls: ['./dynamic-form-question-view.component.scss']
})
export class DynamicFormQuestionViewComponent implements OnInit {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  ngOnInit() {
  }

  constructor(
    private router: Router,
    private global: GlobalService,
  ) {
  }

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  getChar(num: number): String  {
    num = +num;
    num = 97 + num;
    return String.fromCharCode(num);
  }

  abs(num: number): number {
    return Math.abs(num);
  }
  
  onRefresh() {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};
  
    let currentUrl = this.router.url + '?';
  
    this.router.navigateByUrl(currentUrl)
      .then(() => {
        this.router.navigated = false;
        this.router.navigate([this.router.url]);
      });
    }

  goForm(id: number) {
    if (id === 0) {
      this.global.patientAvator = '/assets/avatars/101.png';
      this.global.patientName = 'Anak Pertama';
      this.onRefresh();
    } else if (id === 1) {
      this.global.patientAvator = '/assets/avatars/102.png';
      this.global.patientName = 'Anak Kedua';
      this.onRefresh();
    }
  }

  scroll(href: string) {
    const element = document.querySelector('#b'+href);
    console.log(element);
    if (element) {
      element.scrollIntoView(true);
    }
  }
  
}
