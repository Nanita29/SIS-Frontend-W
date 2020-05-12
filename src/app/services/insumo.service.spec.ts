import { TestBed } from '@angular/core/testing';

import { InsumoService } from './insumo.service';

describe('InsumoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsumoService = TestBed.get(InsumoService);
    expect(service).toBeTruthy();
  });
});
