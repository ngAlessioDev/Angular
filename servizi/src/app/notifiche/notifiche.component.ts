import { NotificheService } from './../notifiche.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notifiche',
  templateUrl: './notifiche.component.html',
  styleUrls: ['./notifiche.component.css']
})
export class NotificheComponent {

  constructor(public notificheService: NotificheService){

  }
}
