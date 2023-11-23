import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-preferiti',
  templateUrl: './pokemon-preferiti.component.html',
  styleUrls: ['./pokemon-preferiti.component.css']
})
export class PokemonPreferitiComponent implements OnInit{

  deleteMode: boolean = true;

  pokemons: Pokemon[] = [];

  constructor(private ps: PokemonsService){

  }
  ngOnInit(): void {
    this.ps.getPreferiti().subscribe(preferiti => this.pokemons = preferiti);
  }

  eliminaPreferiti(){

  }
}
