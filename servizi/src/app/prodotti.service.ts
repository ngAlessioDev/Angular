import { Injectable } from '@angular/core';
import { Prodotto } from './models/prodotto';
import {Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  private apiBaseUrl = "http://localhost:3000/prodotti/";

  /* private prodotti: Prodotto[] = [
    {
      id: 1,
      nome: "Bicicletta",
      descrizione: "Cambio Shimano 18 velocità",
      prezzo: 200,
      inStock: true
    },
    {
      id: 2,
      nome: "Lavastoviglie",
      descrizione: "Silenziosissima",
      prezzo: 400,
      inStock: true
    },
    {
      id: 3,
      nome: "LEGO La Morte Nera",
      descrizione: "8000 pezzi piccoli",
      prezzo: 300,
      inStock: false
    }
  ] */

  constructor(private http: HttpClient) {

  }

  getProdotti(): Observable<Prodotto[]> {

    return this.http.get<Prodotto[]>(this.apiBaseUrl);
  }

  // CRUD
  create(prodotto: Prodotto){
    return this.http.post(this.apiBaseUrl, prodotto)
  }

  
  delete(id: number){
    return this.http.delete(`${this.apiBaseUrl}${id}`)
  }
}
