import { TestBed, inject } from '@angular/core/testing';

import { Customer.LoginService } from './customerlogin.service';

describe('CustomerLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Customer.LoginService]
    });
  });

  it('should be created', inject([Customer.LoginService], (service: CustomerLoginService) => {
    expect(service).toBeTruthy();
  }));
});
