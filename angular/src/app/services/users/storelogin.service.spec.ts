import { TestBed, inject } from '@angular/core/testing';

import { StoreLoginService } from './storelogin.service';

describe('StoreLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreLoginService]
    });
  });

  it('should be created', inject([StoreLoginService], (service: StoreLoginService) => {
    expect(service).toBeTruthy();
  }));
});
