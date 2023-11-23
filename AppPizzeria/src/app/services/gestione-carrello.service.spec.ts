import { TestBed } from '@angular/core/testing';

import { GestioneCarrelloService } from './gestione-carrello.service';

describe('GestioneCarrelloService', () => {
  let service: GestioneCarrelloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestioneCarrelloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
