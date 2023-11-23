import { Album } from '../models/album';
import { AlbumsService } from './../albums.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit{

  album: Album[] = [];

  constructor(private alS: AlbumsService){}

  ngOnInit(): void {
    this.alS.getAlbum().subscribe(albRicevuti => this.album = albRicevuti)
  }


}
