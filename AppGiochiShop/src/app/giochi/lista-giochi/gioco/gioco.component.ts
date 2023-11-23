import { Component, Input } from '@angular/core';
import { Gioco } from 'src/app/model/gioco.model';

@Component({
  selector: 'app-gioco',
  templateUrl: './gioco.component.html',
  styleUrls: ['./gioco.component.css']
})
export class GiocoComponent {

  @Input() gioco: Gioco



  like(){
    this.gioco.voto++;
  }

  dislike(){
    this.gioco.voto--;
  }

}
