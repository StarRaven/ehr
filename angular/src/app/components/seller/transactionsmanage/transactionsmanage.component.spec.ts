import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsmanageComponent } from './transactionsmanage.component';

describe('TransactionsmanageComponent', () => {
  let component: TransactionsmanageComponent;
  let fixture: ComponentFixture<TransactionsmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
