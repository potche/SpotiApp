import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
//es una forma automatica de inyectar el provider en pp.module.ts
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('spotify sevice listo');
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC2J31LlqzqIWG1nXbX3ZAgtLPgl4U4ZzrsvxfcoojRf5zkaop413DAkzPdpZwaBIBEYUJ6tATYXGGQ0qk'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }

  getArtist( termino: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC2J31LlqzqIWG1nXbX3ZAgtLPgl4U4ZzrsvxfcoojRf5zkaop413DAkzPdpZwaBIBEYUJ6tATYXGGQ0qk'
    });
    return this.http.get('https://api.spotify.com/v1/search?q=' + termino + '&type=artist&limit=20', {headers});
  }
}
