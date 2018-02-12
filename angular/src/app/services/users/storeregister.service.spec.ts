import { TestBed, inject } from '@angular/core/testing';

import { StoreRegisterService } from './storeregister.service';

describe('StoreRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreRegisterService]
    });
  });

  it('should be created', inject([StoreRegisterService], (service: StoreRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
