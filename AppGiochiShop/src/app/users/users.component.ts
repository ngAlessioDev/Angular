import { Component } from '@angular/core';
import { User } from './model/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  user: User;

  onAggiungiUser(user: User){
    console.log("Dal component Genitore", user);
    this.user = user;
  }
}
