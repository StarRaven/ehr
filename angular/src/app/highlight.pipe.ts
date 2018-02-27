import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
  transform(content: any[], search): any[] {
    console.log(content);
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
    return content;
  }
}
