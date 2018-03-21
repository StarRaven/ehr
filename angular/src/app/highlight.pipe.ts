import { PipeTransform, Pipe } from '@angular/core';
import { TextboxQuestion } from './questionare/question-textbox';
import { flatten } from 'lodash';
import { SimpleTableQuestion } from './questionare/question-simpletable';
import { ComplexTableQuestion } from './questionare/question-complextable';
import { ListQuestion } from './questionare/question-list';
import { LinkTableQuestion } from './questionare/question-linktable';

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
  transform(content: any[], search): any[] {
    for (let i = 0; i < content.length; i++) {
      content[i].label = this.highlight(content[i].label, search);
      if (content[i] instanceof TextboxQuestion) {
        if (content[i].value) {
          content[i].value = this.highlight(content[i].value, search);
        }
      }
      if (content[i].options) {
        for (let j = 0; j < content[i].options.length; j++) {
          content[i].options[j].value = this.highlight(content[i].options[j].value, search);
        }
      }
      if (content[i].contents) {
        if (content[i] instanceof ListQuestion) {
          for (let j = 0; j < content[i].contents.length; j++) {
            content[i].contents[j][0] = this.highlight(String(content[i].contents[j][0]), search);
          }
        } else if (content[i] instanceof SimpleTableQuestion) {
          for (let j = 0; j < content[i].contents[0][0].length; j++) {
            content[i].contents[0][0][j] = this.highlight(String(content[i].contents[0][0][j]), search);
          }
          for (let j = 0; j < content[i].contents[1].length; j++) {
            for (let k = 0; k < content[i].contents[1][j].length; k++) {
              content[i].contents[1][j][k] = this.highlight(String(content[i].contents[1][j][k]), search);
            }
          }
        } else if (content[i] instanceof ComplexTableQuestion) {
          for (let j = 0; j < content[i].contents[0].length; j++) {
            for (let k = 0; k < content[i].contents[0][j].length; k++) {
              content[i].contents[0][j][k][0] = this.highlight(String(content[i].contents[0][j][k][0]), search);
            }
          }
          for (let j = 0; j < content[i].contents[1].length; j++) {
            for (let k = 0; k < content[i].contents[1][j].length; k++) {
              content[i].contents[1][j][k][0] = this.highlight(String(content[i].contents[1][j][k][0]), search);
            }
          }
        } else if (content[i] instanceof LinkTableQuestion) {
          for (let j = 0; j < content[i].contents[0][0].length; j++) {
            content[i].contents[0][0][j] = this.highlight(String(content[i].contents[0][0][j]), search);
          }
          for (let j = 0; j < content[i].contents[1].length; j++) {
            for (let k = 0; k < content[i].contents[1][j].length; k++) {
              content[i].contents[1][j][k][0] = this.highlight(String(content[i].contents[1][j][k][0]), search);
            }
          }
        }
      }
      if (content[i].desc) {
        content[i].desc = this.highlight(content[i].desc, search);
      }
      if (content[i].comments) {
        content[i].comments = this.highlight(content[i].comments, search);
      }
    }
    return content;
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
