import { TestBed } from '@angular/core/testing';

import { BackAPIService } from './back-api.service';

describe('BackAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackAPIService = TestBed.get(BackAPIService);
    expect(service).toBeTruthy();
  });
});
