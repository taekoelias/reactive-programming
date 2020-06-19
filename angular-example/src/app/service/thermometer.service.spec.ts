import { TestBed } from '@angular/core/testing';

import { ThermometerService } from './thermometer.service';

describe('ThermometerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThermometerService = TestBed.get(ThermometerService);
    expect(service).toBeTruthy();
  });
});
