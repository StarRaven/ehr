import { TestBed, inject } from '@angular/core/testing';

import { AddtransactionService } from './addtransaction.service';

describe('AddtransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddtransactionService]
    });
  });

  it('should be created', inject([AddtransactionService], (service: AddtransactionService) => {
    expect(service).toBeTruthy();
  }));
});
