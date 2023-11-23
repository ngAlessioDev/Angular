import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {


  //Con @Input() la prop viene valorizzata dall'esterno
  @Input() nomeServer: string;
  @Input() numConnChild: number;
}
