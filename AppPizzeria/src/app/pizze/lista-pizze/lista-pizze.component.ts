import { Component, OnInit } from '@angular/core';
import { Ingrediente } from 'src/app/models/ingrediente.model';
import { Pizza } from 'src/app/models/pizza.model';
import { AggiuntaPizzeService } from 'src/app/services/aggiunta-pizze.service';
import { GestioneCarrelloService } from 'src/app/services/gestione-carrello.service';

@Component({
  selector: 'app-lista-pizze',
  templateUrl: './lista-pizze.component.html',
  styleUrls: ['./lista-pizze.component.css']
})
export class ListaPizzeComponent implements OnInit{

  constructor(private servPizze: AggiuntaPizzeService, private carrelloServ: GestioneCarrelloService){}

  ngOnInit(): void {
    this.listaPizze = this.servPizze.getPizze();

  }

  ingredientiBase: string[] = [
    'Pomodoro',
    'Mozzarella',
    'Funghi',
    'Salsiccia',
    'Salame piccante',
    'Prosciutto crudo',
    'Prosciutto cotto'
  ];

  aggiungiIng(nuovoIng: string){
    this.ingredientiBase.push(nuovoIng);
    console.log(this.ingredientiBase);
  }


  listaPizze: Pizza[];

  pizzaDettaglio: Pizza;

  dettaglioPizza(pizza: Pizza){
    this.pizzaDettaglio = pizza;
  }

  compraPizza(pizzaDettaglio: Pizza){
    this.carrelloServ.aggiungiAlCarrello(pizzaDettaglio);
  }

}
