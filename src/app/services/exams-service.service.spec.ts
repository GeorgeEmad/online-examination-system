import { TestBed } from '@angular/core/testing';

import { ExamsServiceService } from './exams-service.service';

describe('ExamsServiceService', () => {
  let service: ExamsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
