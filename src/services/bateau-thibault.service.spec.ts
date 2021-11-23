import { TestBed } from '@angular/core/testing';

import { BateauThibaultService } from './bateau-thibault.service';

describe('BateauThibaultService', () => {
  let service: BateauThibaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BateauThibaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
