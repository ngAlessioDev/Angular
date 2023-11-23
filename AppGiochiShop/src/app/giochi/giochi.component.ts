import { Component } from '@angular/core';
import { Gioco } from '../model/gioco.model';

@Component({
  selector: 'app-giochi',
  templateUrl: './giochi.component.html',
  styleUrls: ['./giochi.component.css']
})
export class GiochiComponent {

 giochi: Gioco[] = [
  {nome: "Monopoly", tipo: "da tavolo", voto: 0, immagine: "https://www.dragonstore.it/files/Raven_Files/Foto/31583_173508.JPG"},
  {nome: "Batman - Arkham Knight", tipo: "videogame", voto: 0, immagine: "https://www.thegamebusters.it/23564-large_default/batman-arkham-knight-playstation-hits-ps4.jpg"}
 ]

 aggiungiGioco(event){
  this.giochi.push(event);
 }
}
