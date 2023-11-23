import { TestBed } from '@angular/core/testing';

import { NavCarrelloServiceService } from './nav-carrello-service.service';

describe('NavCarrelloServiceService', () => {
  let service: NavCarrelloServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavCarrelloServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
