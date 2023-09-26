import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private pokeUrl = 'https://pokeapi.co/api/v2/pokemon';
  private currentPage = 0;

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<any> {
    return this.http.get(`${this.pokeUrl}?offset=${this.currentPage}&limit=6`)
  }

  nextPage(){
    this.currentPage += 6;
    return this.getPokemon()
  }

  previousPage(){
    if (this.currentPage > 0) {
      this.currentPage -= 6;
    }
    return this.getPokemon()
  }
}
