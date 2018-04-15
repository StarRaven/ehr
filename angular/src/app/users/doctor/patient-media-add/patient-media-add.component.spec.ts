import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMediaAddComponent } from './patient-media-add.component';

describe('PatientMediaAddComponent', () => {
  let component: PatientMediaAddComponent;
  let fixture: ComponentFixture<PatientMediaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMediaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMediaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
