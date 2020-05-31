import { TestBed } from '@angular/core/testing';

import { MaterialCirugiaService } from './material-cirugia.service';

describe('MaterialCirugiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialCirugiaService = TestBed.get(MaterialCirugiaService);
    expect(service).toBeTruthy();
  });
});
