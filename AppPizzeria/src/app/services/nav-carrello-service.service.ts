import { Injectable } from '@angular/core';
import { GestioneCarrelloService } from './gestione-carrello.service';

@Injectable({
  providedIn: 'root'
})
export class NavCarrelloServiceService {

  constructor() { }

  carrelloItems: number = 0;
}
