import { TestBed, inject } from '@angular/core/testing';

import { UpdatesalesmanService } from './updatesalesman.service';

describe('UpdatesalesmanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdatesalesmanService]
    });
  });

  it('should be created', inject([UpdatesalesmanService], (service: UpdatesalesmanService) => {
    expect(service).toBeTruthy();
  }));
});
