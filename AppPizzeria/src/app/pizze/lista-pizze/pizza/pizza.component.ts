import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {


  @Input() pizza: Pizza;


  @Output() pizzaDettagli = new EventEmitter<Pizza>();

  onMostraDettagli(){
    this.pizzaDettagli.emit(this.pizza);

  }

}
