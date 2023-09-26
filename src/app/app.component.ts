import { PokedexService } from './../services/pokedex.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Pokedex } from 'src/model/pokedex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokedex';
  pokemonList: Pokedex[] = [];

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.loadPokedex()
  };

  loadPokedex() {
    this.pokedexService.getPokemon().subscribe(
      (data: any) => {
        this.pokemonList = data.results;
      },
      (error) => {
        console.error('Errore nella chiamata all\'API:', error);
      }
    )
  };

  loadNext() {
    this.pokedexService.nextPage().subscribe(
      (data: any) => {
        this.pokemonList = data.results;
      },
      (error) => {
        console.error('Errore nella chiamata all\'API:', error);
      }
    )
  };

  loadPrevious() {
    this.pokedexService.previousPage().subscribe(
      (data: any) => {
        this.pokemonList = data.results;
      },
      (error) => {
        console.error('Errore nella chiamata all\'API:', error);
      }
    )
  };

}

