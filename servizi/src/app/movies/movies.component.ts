import { Component, OnInit } from '@angular/core';
import { SearchResponse } from '../models/movies';
import { MoviesService } from '../movies.service';
import { NotificheService } from '../notifiche.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  searchResponse?: SearchResponse;

  constructor(private ms: MoviesService, private notificheService: NotificheService){}

  ngOnInit(): void {
    /* this.ms.search("star wars").subscribe(sr => this.searchResponse = sr); */
  }

  usr_input: string = '';

  tipologia: string = '';

  cerca(){
  this.notificheService.aggiungi(`Ricerca eseguita con parametro: ${this.usr_input}`);

    this.ms.search(this.usr_input, this.tipologia).subscribe(sr => {
      this.notificheService.aggiungi(`La ricerca eseguita con parametro: ${this.usr_input} ha restituito ${sr.totalResults} risultati`);
      this.searchResponse = sr});
  }

}
