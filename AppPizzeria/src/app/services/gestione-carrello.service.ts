import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { NavCarrelloServiceService } from './nav-carrello-service.service';
import { find } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestioneCarrelloService {

  constructor(private navCarrello: NavCarrelloServiceService) { }

  listaCarrello = [];

  aggiungiAlCarrello(pizza: Pizza){
    this.listaCarrello.push(pizza);
    this.navCarrello.carrelloItems++;
  }

  mostraCarrello(){
    return this.listaCarrello;
  }

  eliminaDaCarrello(prodotto: Pizza){
    

   /*  let indiceProd = this.listaCarrello.findIndex(prodotto);
    console.log(indiceProd);
    console.log(this.listaCarrello);
    this.listaCarrello.slice(indiceProd, 1); */
  }


}
