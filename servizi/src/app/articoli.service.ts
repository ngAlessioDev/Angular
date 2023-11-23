import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articolo } from './models/articolo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticoliService {

  constructor(private http: HttpClient) { }

  getArticoli(): Observable<Articolo[]> {
    const url = "https://jsonplaceholder.typicode.com/posts";
    return this.http.get<Articolo[]>(url);
  }
}
