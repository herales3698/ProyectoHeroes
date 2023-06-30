import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../heroes.service';
import { Hero } from '../hero.models';


@Component({
  selector: 'app-informacion-heroes',
  templateUrl: './informacion-heroes.component.html',
  styleUrls: ['./informacion-heroes.component.css']
})
export class InformacionHeroesComponent implements OnInit{
  

  hero: Hero | undefined;

  //constructor para obtener el parametro y la informacion de heroes 

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroesService
  ) { }

//metodo en donde obtenemos en heroId el id de la ruta y la siguiente liena es para obtener la informacion del heroe

  ngOnInit() {
    const heroId = Number(this.route.snapshot.paramMap.get('id'));

    this.heroService.getHeroById(heroId).subscribe(hero => {
      this.hero = hero;
    });
  }
}
