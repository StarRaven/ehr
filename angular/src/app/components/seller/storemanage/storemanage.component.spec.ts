import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoremanageComponent } from './storemanage.component';

describe('StoremanageComponent', () => {
  let component: StoremanageComponent;
  let fixture: ComponentFixture<StoremanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoremanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoremanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
