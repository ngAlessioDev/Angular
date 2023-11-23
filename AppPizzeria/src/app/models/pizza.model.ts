import { Ingrediente } from "./ingrediente.model";
import { Pizzaiolo } from "./pizzaiolo.model";

export class Pizza {
  nome: string;
  prezzo: number;
  ingredienti: Ingrediente[];
  pizzaiolo: Pizzaiolo;
  immagine: string;


  constructor(nome: string, prezzo: number, ingredienti: Ingrediente[], pizzaiolo: Pizzaiolo, immagine: string){
    this.nome = nome;
    this.prezzo = prezzo;
    this.ingredienti = ingredienti;
    this.pizzaiolo = pizzaiolo;
    this.immagine = immagine;
  }
}
