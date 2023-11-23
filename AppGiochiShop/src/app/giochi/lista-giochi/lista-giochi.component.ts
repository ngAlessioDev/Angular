import { Component, Input } from '@angular/core';
import { Gioco } from 'src/app/model/gioco.model';

@Component({
  selector: 'app-lista-giochi',
  templateUrl: './lista-giochi.component.html',
  styleUrls: ['./lista-giochi.component.css']
})
export class ListaGiochiComponent {

  @Input() giochi: Gioco[]
}
