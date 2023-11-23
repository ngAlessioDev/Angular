import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonsService } from '../pokemons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit{

  dettaglioP?: Pokemon;
type: any;

  constructor(private ps: PokemonsService, private route: ActivatedRoute){}


  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    if(id != null){
      this.ps.getPokeDetail(id).subscribe(dettaglio => {
        console.log(dettaglio);
        this.dettaglioP = dettaglio.data;
      });

    }

  }




  /* @Input() dettagliP?: Pokemon; */
}
