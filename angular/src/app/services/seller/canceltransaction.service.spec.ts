import { TestBed, inject } from '@angular/core/testing';

import { CanceltransactionService } from './canceltransaction.service';

describe('CanceltransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanceltransactionService]
    });
  });

  it('should be created', inject([CanceltransactionService], (service: CanceltransactionService) => {
    expect(service).toBeTruthy();
  }));
});
