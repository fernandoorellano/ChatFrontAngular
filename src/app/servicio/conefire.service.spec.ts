import { TestBed } from '@angular/core/testing';

import { ConefireService } from './conefire.service';

describe('ConefireService', () => {
  let service: ConefireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConefireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
