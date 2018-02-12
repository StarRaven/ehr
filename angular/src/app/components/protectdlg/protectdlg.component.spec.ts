import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectdlgComponent } from './protectdlg.component';

describe('ProtectdlgComponent', () => {
  let component: ProtectdlgComponent;
  let fixture: ComponentFixture<ProtectdlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectdlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectdlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
