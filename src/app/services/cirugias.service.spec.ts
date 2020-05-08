import { TestBed } from '@angular/core/testing';

import { CirugiasService } from './cirugias.service';

describe('CirugiasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CirugiasService = TestBed.get(CirugiasService);
    expect(service).toBeTruthy();
  });
});
