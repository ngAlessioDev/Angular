import { Album } from './models/album';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAlbum(): Observable<Album[]>{
    const url = "https://jsonplaceholder.typicode.com/albums";
    return this.http.get<Album[]>(url);
  }
}
