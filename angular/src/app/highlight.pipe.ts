import { PipeTransform, Pipe } from '@angular/core';
import { TextboxQuestion } from './questionare/question-textbox';

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
