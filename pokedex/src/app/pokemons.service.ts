import { Pokemon, pokeResponse, pokemonSingoloResponse } from './models/pokemon';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  baseCardUrl = 'https://api.pokemontcg.io/v2/';
  private apiKey = '9221a7d7-250a-41c4-b944-ad702ecb629e';

  // parametri opzionali dell'header della richiesta html
  private options = {
    headers: new HttpHeaders({
      "X-Api-Key": this.apiKey
    })
  };



  constructor(private http: HttpClient) { }

  getPokemon(pName: string): Observable<pokeResponse>{
    let url = `${this.baseCardUrl}cards?q=name:${pName}*&pageSize=20`;

    return this.http.get<pokeResponse>(url, this.options);
  }

  getPokeDetail(id: string): Observable<pokemonSingoloResponse>{
    let url = `${this.baseCardUrl}cards/${id}`;
    return this.http.get<pokemonSingoloResponse>(url, this.options);
  }

  aggiungiPreferiti(pokemon: Pokemon){
    return this.http.post<Pokemon>("http://localhost:3000/preferiti", pokemon);
  }

  getPreferiti(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>("http://localhost:3000/preferiti");
  }
}
