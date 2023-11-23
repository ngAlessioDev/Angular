import { Component } from '@angular/core';
import { Server } from './model/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app1-cmpBinding';
 

  nomeServer: string = "Server Test";
  numConness: number = 15;


  listaServer: Server[] = [
    {
      nomeServer: "Server Build",
      numConness: 1
    },
    {
      nomeServer: "Server Prod",
      numConness: 1234
    },
    {
      nomeServer: "Server Engine",
      numConness: 8
    }
  ];


  onAggiungiServer(server: Server){
    console.log(server);
    this.listaServer.push(server);
  }


  // mioMetodo(){
  //   let z = 0;
  //   for(let i = 0; i < this.listaServer.length; i ++){
  //     console.log(this.listaServer[i].nomeServer);
  //   }
  // }
}
