import { NotificheService } from './notifiche.service';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { SearchResponse, Movie } from './models/movies';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private omdbBaseURL = "http://www.omdbapi.com/?apikey=fbf869fa&";

  constructor(private http: HttpClient, private notificheService: NotificheService) { }

  search(query: string, type: string = "movie"): Observable<SearchResponse>{
    /* http://www.omdbapi.com/?apikey=fbf869fa&s=batman&type=movie */
    this.notificheService.aggiungi(`Inviata la richiesta di ricerca al server con parametro ${query}`);

    let url = `${this.omdbBaseURL}type=${type}&s=${query}`;
    /* this.notificheService.aggiungi(url); */
    return this.http.get<SearchResponse>(url);
  }

  findDetail(id: string){
    let url = `${this.omdbBaseURL}i=${id}`;
    this.notificheService.aggiungi(`Inviata la richiesta di recupero film singolo con parametro ${id}`);

    return this.http.get<Movie>(url);
    /* .pipe(
      catchError(err => {
        console.log(err);

        let movieError = {
          "Response": "False",
          "Error": err
        }

        /* qui ho importato "of"
        return of(undefined);
      })
    );*/
  }
}
