import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { PizzeComponent } from './pizze/pizze.component';
import { AddPizzaComponent } from './pizze/add-pizza/add-pizza.component';
import { ListaPizzeComponent } from './pizze/lista-pizze/lista-pizze.component';
import { PizzaComponent } from './pizze/lista-pizze/pizza/pizza.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarrelloComponent } from './carrello/carrello.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzeComponent,
    AddPizzaComponent,
    ListaPizzeComponent,
    PizzaComponent,
    NavbarComponent,
    CarrelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
