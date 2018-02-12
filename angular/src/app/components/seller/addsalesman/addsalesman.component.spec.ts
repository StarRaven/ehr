import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsalesmanComponent } from './addsalesman.component';

describe('AddsalesmanComponent', () => {
  let component: AddsalesmanComponent;
  let fixture: ComponentFixture<AddsalesmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsalesmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsalesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
