import { TestBed } from '@angular/core/testing';

import { PoserviceService } from './poservice.service';

describe('PoserviceService', () => {
  let service: PoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
