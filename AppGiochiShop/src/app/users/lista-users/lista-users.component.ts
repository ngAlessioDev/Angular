import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-lista-users',
  templateUrl: './lista-users.component.html',
  styleUrls: ['./lista-users.component.css']
})
export class ListaUsersComponent implements OnChanges{


  @Input() user: User;

  listaUsers: User[] = [];


  // OnChanges fa parte dei lifecycleHook, ascolta qualsiasi modifica che avviene sulle proprietà marcate con @Input()

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['user'].currentValue);

    if(this.user != null){
      this.listaUsers.push(this.user);
    }
    // let persona = {
    //   nome: "Anna",
    //   cognome: "Bianchi"
    // }

    // console.log(persona.nome);
    // console.log(persona['nome']);

  }
}
