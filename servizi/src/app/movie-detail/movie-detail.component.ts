import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movie, SearchResponse } from '../models/movies';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit{

  constructor(private ms: MoviesService, private route: ActivatedRoute){}

  dettaglioFilm?: Movie;
 /*  error:any; */

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");

    if(id != null){
      this.ms.findDetail(id)
      /* .pipe(catchError(err => {
          this.error = err;
          return of(undefined)} */

      .subscribe(dettaglio => this.dettaglioFilm = dettaglio);

  }
    }

  }
