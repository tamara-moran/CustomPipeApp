import { TestBed } from '@angular/core/testing';

import { CustomDatePipeService } from './custom-date-pipe.service';

describe('CustomDatePipeService', () => {
  let service: CustomDatePipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomDatePipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
