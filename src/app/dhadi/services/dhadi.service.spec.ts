import { TestBed, inject } from '@angular/core/testing';

import { DhadiService } from './dhadi.service';

describe('DhadiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DhadiService]
    });
  });

  it('should be created', inject([DhadiService], (service: DhadiService) => {
    expect(service).toBeTruthy();
  }));
});
