import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  termino: string = "";
  heroes: Heroe[] = [];
  heroeSeleccionado!: Heroe | undefined;

  constructor(private hereosService: HeroesService){}

  buscando(){
    this.hereosService.getSugerencias(this.termino).subscribe(heroes => this.heroes = heroes);
  }

  opcionSeleccionada(event : MatAutocompleteSelectedEvent) {

    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      return
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.hereosService.getHeroePorId(heroe.id!)
    .subscribe(hereo => this.heroeSeleccionado = hereo);
  }


}
