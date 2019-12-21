import { TestBed } from '@angular/core/testing';

import { HandleAdsService } from './handle-ads.service';

describe('HandleAdsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandleAdsService = TestBed.get(HandleAdsService);
    expect(service).toBeTruthy();
  });
});
