import { Component, EventEmitter, Output } from '@angular/core';
import { Gioco } from 'src/app/model/gioco.model';

@Component({
  selector: 'app-crea-giochi',
  templateUrl: './crea-giochi.component.html',
  styleUrls: ['./crea-giochi.component.css']
})
export class CreaGiochiComponent {

  gioco: Gioco = {nome: "", tipo: "", voto: 0, immagine: ""};

  @Output() onGameSelected = new EventEmitter<Gioco>();

  avviso: string;

  sendGame(){
    if(this.gioco.nome == "" || this.gioco.immagine == "" || this.gioco.tipo == ""){
      this.avviso = "Controlla il form, hai dimenticato qualcosa!";
    } else {
      this.onGameSelected.emit(this.gioco);
      this.avviso = "";
    }

  }
}
