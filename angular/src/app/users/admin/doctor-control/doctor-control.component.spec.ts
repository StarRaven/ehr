import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorControlComponent } from './doctor-control.component';

describe('DoctorControlComponent', () => {
  let component: DoctorControlComponent;
  let fixture: ComponentFixture<DoctorControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
