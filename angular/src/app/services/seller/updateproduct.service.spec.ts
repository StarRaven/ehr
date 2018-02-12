import { TestBed, inject } from '@angular/core/testing';

import { UpdateproductService } from './updateproduct.service';

describe('UpdateproductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateproductService]
    });
  });

  it('should be created', inject([UpdateproductService], (service: UpdateproductService) => {
    expect(service).toBeTruthy();
  }));
});
