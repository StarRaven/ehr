import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseControlComponent } from './nurse-control.component';

describe('NurseControlComponent', () => {
  let component: NurseControlComponent;
  let fixture: ComponentFixture<NurseControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
