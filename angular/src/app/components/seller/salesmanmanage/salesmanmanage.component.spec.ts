import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanmanageComponent } from './salesmanmanage.component';

describe('SalesmanmanageComponent', () => {
  let component: SalesmanmanageComponent;
  let fixture: ComponentFixture<SalesmanmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesmanmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesmanmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
