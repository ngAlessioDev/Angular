import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class AggiuntaPizzeService {

  listaPizze: Pizza[] = [
    {nome: 'Margherita', prezzo: 6, ingredienti: [{nome: 'Pomodoro'}, {nome: 'Mozzarella'}, {nome: 'Basilico'}], pizzaiolo: {nome: 'Ciro Esposito'}, immagine: 'https://cdn.shopify.com/s/files/1/0586/6795/8427/articles/Margherita-9920.jpg?crop=center&height=915&v=1644590028&width=1200'},
    {nome: 'Diavola', prezzo: 7, ingredienti: [{nome: 'Pomodoro'}, {nome: 'Mozzarella'}, {nome: 'Salame piccante'}], pizzaiolo: {nome: 'Ciro Esposito'}, immagine: 'https://www.lucianopignataro.it/wp-content/uploads/2023/02/Elementi-Pizzeria-Diavola-480x480.png'},
    {nome: 'Funghi', prezzo: 7, ingredienti: [{nome: 'Pomodoro'}, {nome: 'Mozzarella'}, {nome: 'Funghi'}], pizzaiolo: {nome: 'Gennaro Manna'}, immagine: 'https://t4.ftcdn.net/jpg/05/73/88/19/360_F_573881982_012y0OrRAqIPstCwfA6PN3n3HVOsRFSZ.jpg'}
  ];

  constructor() { }

  aggiungi(pizza: Pizza){
    this.listaPizze.push(pizza);
  }

  getPizze(){
    return this.listaPizze;
  }
}
