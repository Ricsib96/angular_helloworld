import { TestBed } from '@angular/core/testing';

import { ColorInterpolationService } from './color-interpolation.service';

describe('ColorInterpolationService', () => {
  let service: ColorInterpolationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorInterpolationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
