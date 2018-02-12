import { TestBed, inject } from '@angular/core/testing';

import { SalesmanLoginService } from './salesman-login.service';

describe('SalesmanLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesmanLoginService]
    });
  });

  it('should be created', inject([SalesmanLoginService], (service: SalesmanLoginService) => {
    expect(service).toBeTruthy();
  }));
});
