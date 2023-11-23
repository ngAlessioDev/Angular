import { Component, DoCheck } from '@angular/core';
import { NavCarrelloServiceService } from '../services/nav-carrello-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck{

  constructor(private carrelloServ: NavCarrelloServiceService){}

  ngDoCheck(): void {
    this.carrelloItems = this.carrelloServ.carrelloItems;
  }

  carrelloItems: number = 0;
}
