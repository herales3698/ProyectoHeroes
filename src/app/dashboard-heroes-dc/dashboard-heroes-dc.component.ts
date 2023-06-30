import { Component, OnInit, Inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../hero.models';

@Component({
  selector: 'app-dashboard-heroes-dc',
  templateUrl: './dashboard-heroes-dc.component.html',
  styleUrls: ['./dashboard-heroes-dc.component.css']
})
export class DashboardHeroesDcComponent implements OnInit {


  heroes: Hero[] = [

  ];


  constructor(private route: ActivatedRoute, private router: Router, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }
  
   /*  aca la Propiedad cards que se utiliza en la plantilla del componente
   Si el breakpoint coincide con un dispositivo
  Se devuelve un array con objetos de informacion que eventualmente se mostraran en las cards*/

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Superman', image: '/assets/superman.jpg', descriptionCard: 'es un superhéroe de origen extraterrestre que posee una serie de habilidades sobrehumanas', id: 1, cols: 1.5, rows: 2 },
          { title: 'Wonder Woman', image: '/assets/MujerMaravilla.png',descriptionCard:'tiene sus raíces en la mitología griega y ha sido  ampliada a lo largo de los años en diferentes adaptaciones y medios',id:3,cols: 1.5, rows: 2 },
          { title: 'The Flash', image: '/assets/flash.jpg',descriptionCard:'se centra en varios personajes que han llevado el manto de Flash a lo largo de los años, pero el más conocido es Barry Allen',id:2, cols: 1.5, rows: 2 },
          { title: 'Green Lantern', image: '/assets/LinternaVerde.png',descriptionCard:'Linterna Verde es el nombre compartido por varios personajes de DC Comics',id:4, cols: 1.5, rows: 2 }
        ];
      }

      return [
        { title: 'Superman', image: '/assets/superman.jpg', descriptionCard:'es un superhéroe de origen extraterrestre que posee una serie de habilidades sobrehumanas', id:1, cols: 1, rows: 2 },
        { title: 'Wonder woman', image: '/assets/MujerMaravilla.png',descriptionCard:'tiene sus raíces en la mitología griega y ha sido  ampliada a lo largo de los años en diferentes adaptaciones y medios',id:3, cols: 1, rows: 2 },
        { title: 'The Flash', image: '/assets/flash.jpg',descriptionCard:'personajes que han llevado el manto de Flash a lo largo de los años',id:2, cols: 1, rows: 1 },
        { title: 'Green Lantern', image: '/assets/LinternaVerde.png',descriptionCard:'Linterna Verde es el nombre compartido por varios personajes de DC Comics ',id:4, cols: 1, rows: 1 }
      ];
    })
  );
}
