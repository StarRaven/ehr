import { TestBed, inject } from '@angular/core/testing';

import { CustomerRegisterService } from './customerregister.service';

describe('CustomerRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerRegisterService]
    });
  });

  it('should be created', inject([CustomerRegisterService], (service: CustomerRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
