import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'highlightbox'
})
export class HighlightBoxPipe implements PipeTransform {
  transform(boxes: any[], search): any[] {
    console.log(boxes);
    let newboxes = [];
    for (let i = 0; i < boxes.length; i++) {
      console.log(boxes[i].widgetType);
      if (boxes[i].widgetType !== '') {
        newboxes.push(boxes[i]);
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
}
