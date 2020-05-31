import { TestBed } from '@angular/core/testing';

import { InsumoCirugiaService } from './insumo-cirugia.service';

describe('InsumoCirugiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsumoCirugiaService = TestBed.get(InsumoCirugiaService);
    expect(service).toBeTruthy();
  });
});
