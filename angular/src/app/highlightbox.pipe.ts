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
    console.log(boxes);
    const newboxes = [];
    for (const box of boxes) {
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
            if (!search) {
              newboxes.push(box);
              break;
            }
            // label
            for (const dataset of box.content.datasets) {
              if (this.include(dataset.label, search)) {
                newboxes.push(box);
                break;
              }
              // data
              for (const d of dataset.data) {
                if (this.include(String(d), search)) {
                  newboxes.push(box);
                  break;
                }
              }
            }
            // date
            for (const label of box.content.labels) {
              if (this.include(moment(label).format('DD MMM'), search)) {
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
                newforms.push(form);
              } else if (this.include(form.date, search)) {
                newforms.push(form);
              } else if (this.FormContain(form.form, search)) {
                newforms.push(form);
              }
            }
            console.log(newforms);
            if (newforms.length !== 0) {
              console.log('yes');
              box.content = newforms;
              newboxes.push(box);
            }
          }
        }

      }
    }
    /*
    for (let i = 0; i < content.length; i++) {
      if (search && content[i].label) {
        let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        pattern = pattern.split(' ').filter((t) => {
          return t.length > 0;
        }).join('|');
        const regex = new RegExp(pattern, 'gi');
        content[i].label = content[i].label.replace(regex, (match) => `<span class="search-highlight">${match}</span>`);
        //return content[i].label.replace(regex, (match) => `<span class="search-highlight">${match}</span>`);
      } else {
        //return content[i].label;
      }
    }
    console.log(content);
    */
    return newboxes;
  }

  FormContain(id: number, search): boolean {
    if (!search) {
      return true;
    }
    const form = this.QService.getQuestions();
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
