import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];

  constructor( private spotify: SpotifyService ) { }

  ngOnInit() {
  }

  buscar( termino: string){
    console.log(termino);
    this.spotify.getArtist( termino )
      .subscribe( (resp: any) => {
        console.log(resp.artists.items);
        this.artists = resp.artists.items;
      });
  }
}
