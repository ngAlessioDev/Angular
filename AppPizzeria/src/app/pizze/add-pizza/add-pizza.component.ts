
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Ingrediente } from 'src/app/models/ingrediente.model';
import { Pizza } from 'src/app/models/pizza.model';
import { Pizzaiolo } from 'src/app/models/pizzaiolo.model';
import { AggiuntaPizzeService } from 'src/app/services/aggiunta-pizze.service';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent {

  constructor(private addPizzaServ: AggiuntaPizzeService) {}



  stringaIngredienti: string;
  



  nomePizza: string;
  prezzoPizza: number;
  ingredienti: Ingrediente[] = [];
  pizzaiolo: Pizzaiolo;
  immagine: string;

  pizza: Pizza;

  onAddPizza(){
    let arrayIngredienti: string[] = this.stringaIngredienti.split(",");
    for(let ing of arrayIngredienti){
      let ingredienteSingolo: Ingrediente = {nome: ""};
      ingredienteSingolo.nome = ing;
      this.ingredienti.push(ingredienteSingolo);
    }

    this.pizza = new Pizza(this.nomePizza, this.prezzoPizza, this.ingredienti, this.pizzaiolo, this.immagine);

    this.addPizzaServ.aggiungi(this.pizza);
    this.ingredienti = [];


  }
}
