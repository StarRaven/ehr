import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormQuestionViewComponent } from './dynamic-form-question-view.component';

describe('DynamicFormQuestionViewComponent', () => {
  let component: DynamicFormQuestionViewComponent;
  let fixture: ComponentFixture<DynamicFormQuestionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormQuestionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormQuestionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
