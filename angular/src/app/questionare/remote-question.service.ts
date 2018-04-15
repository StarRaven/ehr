import { Injectable } from '@angular/core';

import { QuestionBase } from './question-base';
import { CheckboxQuestion } from './question-checkbox';
import { DropdownQuestion } from './question-dropdown';
import { TableQuestion } from './question-table';
import { TextboxQuestion } from './question-textbox';
import { Title } from './question-title';
import { FreeText } from './question-freetext';
import { LinkTableQuestion } from './question-linktable';
import { SimpleTableQuestion } from './question-simpletable';
import { ComplexTableQuestion } from './question-complextable';
import { ListQuestion } from './question-list';

import { Headers, Http } from '@angular/http';
import { GlobalService } from '../global.service';

@Injectable()
export class RemoteQuestionService {
  constructor(
    private http: Http,
    private global: GlobalService,
  ) { }

  QuestionsToJson(questions: any): any{
    console.log('to JSON');
    let s = {"data":[]};
    for (let q of questions) {
      if (q instanceof Title) {
        s.data.push({
          'type': "Title",
          'key': q.key,
          'label': q.label,
          'value': q.value,
          'required': q.required,
          'order': q.order,
          'group': q.group,
          'layout': q.layout
        });
      } else if (q instanceof TextboxQuestion) {
        s.data.push({
          'type': "TextboxQuestion",
          'key': q.key,
          'label': q.label,
          'value': q.value,
          'required': q.required,
          'order': q.order,
          'group': q.group,
          'layout': q.layout
        });
      }
    }
    return s;
  }

  getQuestions(id: number): any {
    let promise = new Promise((resolve, reject) => {
      //TODO
      const questions: QuestionBase<any>[] = [];
      let headers = new Headers({ 'Content-Type': 'application/json' });
      this.http.get(this.global.server + 'forms/' + id, { headers: headers }).subscribe(
        (jsonData) => {
          let rawQuestions = jsonData.json().data;
          for (let q of rawQuestions) {
            // console.log(q);
            switch (q.type) {
              case 'Title': {
                questions.push(
                  new Title({
                    'key': q.key,
                    'label': q.label,
                    'value': q.value,
                    'required': q.required,
                    'order': q.order,
                    'group': q.group,
                    'layout': q.layout
                  }));
                break;
              }
              case 'TextboxQuestion': {
                questions.push(new TextboxQuestion({
                  'key': q.key,
                  'label': q.label,
                  'value': q.value,
                  'required': q.required,
                  'order': q.order,
                  'group': q.group,
                  'layout': q.layout
                }));
                //statements; 
                break;
              }
            }
          }
          // console.log(questions);
          // return questions.sort((a, b) => a.order - b.order);
          resolve(questions.sort((a, b) => a.order - b.order));
        },
        // The 2nd callback handles errors.
        (err) => reject(err),
        // The 3rd callback handles the "complete" event.
        () => console.log('observable complete')
      );
    });
    return promise;
  }

}
