import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit{

  /* id!: Heroe; */
  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router){}

  ngOnInit(): void {
    // 1 forma
    /* this.activatedRoute.params.subscribe( (id: any) => this.id = id);
    console.log(this.id.id); */

    // 2 forma
    /* this.activatedRoute.params.subscribe(console.log); */
    this.activatedRoute.params
    .pipe(
      switchMap(({ id }) => this.heroesService.getHeroePorId(id))
    )
    .subscribe( hereo => this.heroe = hereo);
  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }


}
