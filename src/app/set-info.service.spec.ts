import { TestBed } from '@angular/core/testing';

import { SetInfoService } from './set-info.service';

describe('SetInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetInfoService = TestBed.get(SetInfoService);
    expect(service).toBeTruthy();
  });
});
