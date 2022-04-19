import { TestBed } from '@angular/core/testing';

import { SgfoodieService } from './sgfoodie.service';

describe('SgfoodieService', () => {
  let service: SgfoodieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SgfoodieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
