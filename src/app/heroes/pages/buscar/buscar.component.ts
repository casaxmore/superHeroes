import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  constructor(private hereosService: HeroesService){}

  termino: string = "";
  heroes: Heroe[] = [];
  heroeSeleccionado!: Heroe | undefined;

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
