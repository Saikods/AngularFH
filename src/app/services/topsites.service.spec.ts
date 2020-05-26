import { TestBed } from '@angular/core/testing';

import { TopsitesService } from './topsites.service';

describe('TopsitesService', () => {
  let service: TopsitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopsitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
