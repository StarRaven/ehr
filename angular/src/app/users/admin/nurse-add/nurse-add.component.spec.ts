import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseAddComponent } from './nurse-add.component';

describe('NurseAddComponent', () => {
  let component: NurseAddComponent;
  let fixture: ComponentFixture<NurseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
