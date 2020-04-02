import { TestBed } from '@angular/core/testing';

import { TrendServiceService } from './trend-service.service';

describe('TrendServiceService', () => {
  let service: TrendServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
