/* import { Pokemon } from './../models/pokemon'; */
import { Component } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { pokeResponse } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent {


  constructor(private ps: PokemonsService){}

  pokeResponse?: pokeResponse;

  usr_input: string = '';

  cerca(){
    this.ps.getPokemon(this.usr_input).subscribe(pokemon => this.pokeResponse = pokemon)
  }


}
