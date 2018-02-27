import {NgModule} from '@angular/core';
import {HighlightPipe} from './highlight.pipe';

@NgModule({
  imports: [],
  declarations: [HighlightPipe],
  exports: [HighlightPipe],
})

export class PipeModule {
  static forRoot() {
    return {
      ngModule: PipeModule,
      providers: [],
    };
  }
}