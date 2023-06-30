import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-dc-carousel',
  templateUrl: './heroes-dc-carousel.component.html',
  styleUrls: ['./heroes-dc-carousel.component.css']
})
export class HeroesDcCarouselComponent implements OnInit {

  heroes: Hero[] = [];

  // Imagenes 
  imagenFlash: string = '/assets/flash.jpg';
  imagenSuperman: string = '/assets/superman.jpg';
  imagenMujerMaravilla: string = '/assets/MujerMaravilla.png';
  imagenLinternaVerde: string ='/assets/LinternaVerde.png';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    //lo que hace este codigo es que por medio de la posicion i hace un translatex en css para que sea funcional el carousel
    //la operacion se hace teniendo en ccuenta que son 4 imagenes por tanto es 100/4 y el resultado es el desplazamineto de cada immagen
  
    const grande = document.querySelector('.grande') as HTMLElement;
    const puntos = document.querySelectorAll('.punto') as NodeListOf<HTMLElement>;

    puntos.forEach((punto, i) => {
      punto.addEventListener('click', () => {
        let posicion = i;
        let operacion = posicion * -25;
        grande.style.transform = `translateX(${operacion}%)`;

        puntos.forEach((cadaPunto, index) => {
          cadaPunto.classList.remove('activo');
        });
        punto.classList.add('activo');
      });
    });
  }
}

