import { TestBed, inject } from '@angular/core/testing';

import { DeletesalesmanService } from './deletesalesman.service';

describe('DeletesalesmanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeletesalesmanService]
    });
  });

  it('should be created', inject([DeletesalesmanService], (service: DeletesalesmanService) => {
    expect(service).toBeTruthy();
  }));
});
