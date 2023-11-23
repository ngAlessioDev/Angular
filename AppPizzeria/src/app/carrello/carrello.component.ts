import { Component, OnInit } from '@angular/core';
import { GestioneCarrelloService } from '../services/gestione-carrello.service';
import { Pizza } from '../models/pizza.model';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit{


  constructor(private carrelloServ: GestioneCarrelloService){}

  ngOnInit(): void {
       this.listaCarrello = this.carrelloServ.mostraCarrello();
  }

  listaCarrello: Pizza[];


  cancellaProd(prodotto: Pizza){
    let indiceProd = this.listaCarrello.indexOf(prodotto);
    console.log(indiceProd);
    console.log(this.listaCarrello);
    this.carrelloServ.eliminaDaCarrello(prodotto);
  }
}
