import { TestBed } from '@angular/core/testing';

import { SpecialityServiceService } from './speciality-service.service';

describe('SpecialityServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecialityServiceService = TestBed.get(SpecialityServiceService);
    expect(service).toBeTruthy();
  });
});
