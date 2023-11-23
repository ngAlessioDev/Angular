import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  id: number;
  nome: string;
  ruolo: "admin" | "base" | "guest";

  @Output() userCreated = new EventEmitter<User>();


  onAddUser(){
    this.userCreated.emit(new User(this.id, this.nome, this.ruolo));

  }
}
