import { TestBed, inject } from '@angular/core/testing';

import { CompletetransactionService } from './completetransaction.service';

describe('CompletetransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompletetransactionService]
    });
  });

  it('should be created', inject([CompletetransactionService], (service: CompletetransactionService) => {
    expect(service).toBeTruthy();
  }));
});
