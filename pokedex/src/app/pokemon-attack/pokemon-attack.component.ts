import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, pokemonSingoloResponse } from '../models/pokemon';
import { PokemonsService } from '../pokemons.service';
import { Attack } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-attack',
  templateUrl: './pokemon-attack.component.html',
  styleUrls: ['./pokemon-attack.component.css']
})
export class PokemonAttackComponent implements OnInit{

  @Input()type:any;

  @Input() attacco?: Attack[];


  constructor(private ps: PokemonsService){}

  ngOnInit(): void {

  }
}
