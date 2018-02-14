import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFormAddComponent } from './patient-form-add.component';

describe('PatientFormAddComponent', () => {
  let component: PatientFormAddComponent;
  let fixture: ComponentFixture<PatientFormAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientFormAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
