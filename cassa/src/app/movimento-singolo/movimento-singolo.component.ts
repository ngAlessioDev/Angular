import { Component, OnInit } from '@angular/core';
import { Movimento } from '../models/movimento';
import { MOVIMENTI } from 'src/dati';

@Component({
  selector: 'app-movimento-singolo',
  templateUrl: './movimento-singolo.component.html',
  styleUrls: ['./movimento-singolo.component.css']
})
export class MovimentoSingoloComponent implements OnInit{

  id: number = 0;

  movimento: Movimento = {data: '', tipo: '', descrizione: '', importo: 0};

  isAddDisabled: boolean = false;
  isModDisabled: boolean = true;

  aggiungiR(){
    if(!this.isAddDisabled){
      this.movimento.tipo = this.movimento.tipo.toUpperCase();
      this.movimenti.push(this.movimento);
      this.aggiornaTotale();
      this.formReset();
    } else {
      this.modifiedMov.tipo =  this.modifiedMov.tipo.toUpperCase();
      this.movimenti.splice(this.modifiedIndex, 1, this.modifiedMov);
      if(this.modifiedMov.tipo == 'USCITA' && this.toBeModified.importo > this.modifiedMov.importo){
        let differenza = this.toBeModified.importo - this.modifiedMov.importo;
        this.totale += differenza;
      } else if (this.modifiedMov.tipo == 'USCITA' && this.toBeModified.importo < this.modifiedMov.importo){
        let differenza = this.modifiedMov.importo - this.toBeModified.importo;
        this.totale -= differenza;
      } else if(this.modifiedMov.tipo == 'ENTRATA' && this.toBeModified.importo > this.modifiedMov.importo){
        let differenza = this.toBeModified.importo - this.modifiedMov.importo;
        this.totale -= differenza;
      } else if(this.modifiedMov.tipo == 'ENTRATA' && this.toBeModified.importo < this.modifiedMov.importo){
        let differenza = this.modifiedMov.importo - this.toBeModified.importo;
        this.totale += differenza;
      }


      this.formReset();
      this.isAddDisabled = false;
      this.isModDisabled = true;
    }
  }

  eliminaR(m: Movimento){
    if(window.confirm('Sei sicuro di voler eliminare il record?') == true){
      let i = this.movimenti.indexOf(m);
      if(i > -1){
        this.movimenti.splice(i, 1);
        if(m.tipo == 'ENTRATA'){
          this.totale -= m.importo;
        } else {
          this.totale += m.importo;
        }
      }
    }
  }

  modifiedIndex:number = 0;
  modifiedMov: Movimento = {data: '', tipo: '', descrizione: '', importo: 0};
  toBeModified: Movimento = {data: '', tipo: '', descrizione: '', importo: 0};

  modificaR(m: Movimento){
    this.toBeModified = m;
    let indice = this.movimenti.indexOf(m);
    this.isAddDisabled = true;
    this.isModDisabled = false;
    this.movimento.data = m.data;
    this.movimento.tipo = m.tipo.toLowerCase();
    this.movimento.descrizione = m.descrizione;
    this.movimento.importo = m.importo;
    this.modifiedMov = this.movimento;
    this.modifiedIndex = indice;
  }


  aggiornaTotale(){
    if(this.movimento.tipo == 'ENTRATA'){
      this.totale += this.movimento.importo
    } else {
      this.totale -= this.movimento.importo
    }
  }

  formReset(){
    this.movimento = {data: '', tipo: '', descrizione: '', importo: 0};
  }

  totale: number = 0;

  ngOnInit(): void {
    for(let m of this.movimenti){
      let importoIniziale = m.importo;
      if(m.tipo == 'ENTRATA'){
        this.totale += importoIniziale;
      } else {
        this.totale -= importoIniziale;
      }
    }
  }

  movimenti: Movimento[] = MOVIMENTI;
}
