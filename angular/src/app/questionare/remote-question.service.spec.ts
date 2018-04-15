import { TestBed, inject } from '@angular/core/testing';

import { RemoteQuestionService } from './remote-question.service';

describe('RemoteQuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoteQuestionService]
    });
  });

  it('should be created', inject([RemoteQuestionService], (service: RemoteQuestionService) => {
    expect(service).toBeTruthy();
  }));
});
