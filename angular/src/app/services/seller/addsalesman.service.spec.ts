import { TestBed, inject } from '@angular/core/testing';

import { AddsalesmanService } from './addsalesman.service';

describe('AddsalesmanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddsalesmanService]
    });
  });

  it('should be created', inject([AddsalesmanService], (service: AddsalesmanService) => {
    expect(service).toBeTruthy();
  }));
});
