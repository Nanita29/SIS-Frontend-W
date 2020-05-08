import { TestBed } from '@angular/core/testing';

import { PersonalCirugiaService } from './personal-cirugia.service';

describe('PersonalCirugiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonalCirugiaService = TestBed.get(PersonalCirugiaService);
    expect(service).toBeTruthy();
  });
});
