import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesalesmanComponent } from './updatesalesman.component';

describe('UpdatesalesmanComponent', () => {
  let component: UpdatesalesmanComponent;
  let fixture: ComponentFixture<UpdatesalesmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesalesmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesalesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
