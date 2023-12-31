import { Prodotto } from './../models/prodotto';
import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../prodotti.service';

@Component({
  selector: 'app-prodotti-gallery',
  templateUrl: './prodotti-gallery.component.html',
  styleUrls: ['./prodotti-gallery.component.css']
})
export class ProdottiGalleryComponent implements OnInit{

  prodotti: Prodotto[] = [];

  prodotto: Prodotto = {descrizione: "", inStock: true, nome: "", prezzo: 0};

  constructor(private prodottiService: ProdottiService) {

  }

  ngOnInit(): void {
    this.caricaProdotti();
  }

  caricaProdotti(){
    this.prodottiService.getProdotti().subscribe(pArray => this.prodotti = pArray);
  }

  salva(){
    this.prodottiService.create(this.prodotto).subscribe(p => {
      console.log(p);

      // Svuoto il prodotto
      this.prodotto = {descrizione: "", inStock: true, nome: "", prezzo: 0};

      // Ricarico dal server tutti i prodotti
      this.caricaProdotti();
    })
  }

  eliminaProd(id: number){
    this.prodottiService.delete(id).subscribe();
    this.caricaProdotti();
  }
}
