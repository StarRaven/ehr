import { TestBed, inject } from '@angular/core/testing';

import { ApprovetransactionService } from './approvetransaction.service';

describe('ApprovetransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApprovetransactionService]
    });
  });

  it('should be created', inject([ApprovetransactionService], (service: ApprovetransactionService) => {
    expect(service).toBeTruthy();
  }));
});
