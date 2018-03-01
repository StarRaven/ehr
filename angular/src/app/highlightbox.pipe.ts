import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import {QuestionService} from './questionare/question.service';

@Pipe({
  name: 'highlightbox'
})
export class HighlightBoxPipe implements PipeTransform {

  constructor(
    private QService: QuestionService
  ) { }

  transform(boxes: any[], search): any[] {
    const newboxes = [];
    for (const box of boxes) {
      console.log(box.content);
      if (box.widgetType !== '') {
        switch (box.widgetType) {
          case 'information' : {
            let flag = false;
            for (let j = 0; j < box.content.length; j++) {
              if ((this.include(box.content[j].label, search))
              || (this.include(box.content[j].value, search))) {
                flag = true;
              }
              box.content[j].label = this.highlight(box.content[j].label, search);
              box.content[j].value = this.highlight(box.content[j].value, search);
            }
            if (flag) {
              newboxes.push(box);
            }
            break;
          }
          case 'chart' : {
            // label
            let isPushed = false;
            // console.log(box.content);
            for (const dataset of box.content.datasets) {
              if (this.include(dataset.label, search)) {
                newboxes.push(box);
                isPushed = true;
                break;
              }
              // data
              for (const d of dataset.data) {
                if (this.include(String(d), search)) {
                  newboxes.push(box);
                  isPushed = true;
                  break;
                }
              }
            }
            if (isPushed) {
              break;
            }
            // date
            for (const label of box.content.labels) {
              if (this.include(label, search)) {
                newboxes.push(box);
                break;
              }
            }
            break;
          }
          case 'form' : {
            const newforms = [];
            for (const form of box.content) {
              if (this.include(form.type, search)) {
                console.log('Form Type Contain');
                form.show = true;
                // newforms.push(form);
              } else if (this.include(form.date, search)) {
                console.log('Form Date Contain');
                form.show = true;
                // newforms.push(form);
              } else if (this.FormContain(form.form, search)) {
                console.log('Form Content Contain');
                form.show = true;
                // newforms.push(form);
              } else {
                form.show = false;
              }
              newforms.push(form);
            }
            // console.log(newforms);
            if (newforms.length !== 0) {
              box.content = newforms;
              console.log(box.content);
              newboxes.push(box);
            }
          }
        }

      }
    }
   // console.log(newboxes);
    return newboxes;
  }

  FormContain(id: number, search): boolean {
    if (!search) {
      return true;
    }
    const form = this.QService.getQuestions(id);
    for (const Question of form) {
      if (this.include(Question.label, search)) {
        return true;
      } else if (this.include(Question.desc, search)) {
        return true;
      } else if (this.include(Question.comments, search)) {
        return true;
      }
    }
    return false;
  }

  include(text: string, search): boolean {
    text = this.removeHL(text);
    if (!search) {
      return true;
    }
    if (!text) {
      return false;
    }
    text = text.toLowerCase();
    search = search.toLowerCase();
    if (text.indexOf(search) === -1) {
      return false;
    }
    return true;
  }

  removeHL(text: string): string {
    while (text.indexOf('<span class="search-highlight">') !== -1) {
      const a = text.substring(0, text.indexOf('<span class="search-highlight">'));
      const b = text.substring(text.indexOf('<span class="search-highlight">') + 31, text.indexOf('</span>'));
      const c = text.substring(text.indexOf('</span>') + 7, text.length);
      text = a + b + c;
    }
    return text;
  }

  highlight(text: string, search): string {
    text = this.removeHL(text);
    if (!search || !text) {
      return text;
    }
    let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    pattern = pattern.split(' ').filter((t) => {
      return t.length > 0;
    }).join('|');
    const regex = new RegExp(pattern, 'gi');
    return text.replace(regex, (match) => `<span class="search-highlight">${match}</span>`);
  }
}
