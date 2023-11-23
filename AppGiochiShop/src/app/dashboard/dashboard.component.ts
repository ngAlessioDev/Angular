import { Component, EventEmitter, Output } from '@angular/core';
import { Server } from '../model/server.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  nomeServer: string;
  numConn: number;

  @Output() serverCreato = new EventEmitter<Server>();

  onCreaServer(){
    this.serverCreato.emit({
      nomeServer: this.nomeServer,
      numConness: this.numConn
    })
  }
}
