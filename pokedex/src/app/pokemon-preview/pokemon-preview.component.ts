import { Component, Input, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { Pokemon, pokeResponse } from '../models/pokemon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemon-preview',
  templateUrl: './pokemon-preview.component.html',
  styleUrls: ['./pokemon-preview.component.css']
})
export class PokemonPreviewComponent {

  @Input() deleteMode?: boolean;

  @Input() pokemon?: Pokemon;

  constructor(private ps: PokemonsService, private router: Router){}

aggiungiPreferiti(){
  this.ps.aggiungiPreferiti(this.pokemon!).subscribe(p => {
    console.log(p);
    this.router.navigate(["pokemon", "preferiti"])
  });


}


  pokeDetails?: Pokemon;

 pokeID?: string;

 /*  cercaID(id: string){
   return this.ps.getPokeDetail(id).subscribe(datiPoke => this.pokeDetails = datiPoke)
  } */

}
