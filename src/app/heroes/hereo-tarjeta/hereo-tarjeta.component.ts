import { Component, Input } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Component({
  selector: 'app-hereo-tarjeta',
  templateUrl: './hereo-tarjeta.component.html',
  styleUrls: ['./hereo-tarjeta.component.css']
})
export class HereoTarjetaComponent {

@Input() heroe!: Heroe;

}
