import { TestBed } from '@angular/core/testing';

import { AggiuntaPizzeService } from './aggiunta-pizze.service';

describe('AggiuntaPizzeService', () => {
  let service: AggiuntaPizzeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AggiuntaPizzeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
