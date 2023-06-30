import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

//llenamos la informacion del heroe que importamos del modelo 


  heroes: Hero[] = [
    { 
      id: 1,
      image: '/assets/superman.jpg',
      name: 'Superman',
      description: `Superman es uno de los superhéroes más icónicos y populares de todos los tiempos. Su historia se remonta al planeta Krypton, donde nació como Kal-El, hijo del científico Jor-El y su esposa Lara Lor-Van. Krypton se encontraba al borde de la destrucción debido a su inestable núcleo, por lo que Jor-El decidió enviar a su hijo a la Tierra con el fin de salvarlo.

Kal-El llegó a la Tierra en una pequeña nave espacial y fue encontrado por Jonathan y Martha Kent, una pareja de granjeros de Smallville. Ellos lo adoptaron y le dieron el nombre de Clark Kent. Desde una edad temprana, Clark descubrió que tenía habilidades extraordinarias debido a la diferencia de gravedad y al sol amarillo de la Tierra, que le otorgaron superpoderes.

Bajo la identidad de Clark Kent, llevó una vida normal en Smallville, pero decidió usar sus poderes para ayudar a los demás cuando llegó a la edad adulta. Se mudó a Metropolis y se convirtió en periodista en el Daily Planet, donde trabajaba junto a Lois Lane, una de las principales reporteras del periódico.

Para proteger su identidad secreta, Clark adoptó la identidad de Superman, el Hombre de Acero. Con su emblemático traje azul y rojo, capa y la 'S' en su pecho, Superman se convirtió en el defensor de la justicia y la esperanza. Utilizó sus habilidades sobrehumanas, como la súper fuerza, la invulnerabilidad, la velocidad y el vuelo, para luchar contra el crimen y proteger a los inocentes.

Superman se enfrentó a numerosos villanos a lo largo de su historia, como Lex Luthor, su archienemigo y genio criminal, y otros seres poderosos como Doomsday y Brainiac. También formó parte de equipos de superhéroes, como la Liga de la Justicia, donde trabajó junto a otros héroes como Batman, Wonder Woman y Flash.

Además de su lucha contra el crimen, Superman también representa la esperanza y los ideales de verdad, justicia y bondad. Es un símbolo de inspiración para muchas personas, y su historia ha sido contada en cómics, películas, series de televisión y otros medios, convirtiéndolo en un ícono cultural y un símbolo duradero de los superhéroes.`
    },
    { 
      id: 2,
      image: '/assets/flash.jpg',
      name: 'The Flash',
      description: `Flash, también conocido como el Velocista Escarlata, es uno de los superhéroes más icónicos y populares del universo de los cómics. Su historia se centra en varios personajes que han llevado el manto de Flash a lo largo de los años, pero el más conocido es Barry Allen.

Barry Allen era un científico forense que trabajaba en el Departamento de Policía de Central City. Un día, mientras estaba en su laboratorio, fue alcanzado por un rayo y bañado en productos químicos que le otorgaron poderes sobrehumanos de velocidad.

Después de descubrir sus nuevos poderes, Barry decidió usarlos para proteger a los inocentes y luchar contra el crimen en Central City. Adoptó el nombre de Flash y se convirtió en el defensor de la ciudad.

Flash posee la habilidad de correr a velocidades increíbles, incluso superando la velocidad de la luz. Esta capacidad le permite moverse a través del tiempo y el espacio, así como realizar hazañas asombrosas, como atravesar paredes, desplazarse sobre el agua e incluso volar.

A lo largo de su historia, Flash ha enfrentado a numerosos villanos, como el Profesor Zoom, Capitán Frío, Gorilla Grodd y el Inverso Flash. También ha sido miembro destacado de la Liga de la Justicia, un equipo de superhéroes que protege al mundo de amenazas mayores.

La historia de Flash ha sido contada en cómics, series de televisión y películas, ganando un lugar especial en el corazón de los fanáticos de los superhéroes. Su espíritu optimista, su valentía y su increíble velocidad lo convierten en un ícono duradero del mundo de los superhéroes.`
    },
    { 
      id: 3,
      image: '/assets/MujerMaravilla.png',
      name: 'Wonder Woman',
      description: `La Mujer Maravilla, también conocida como Wonder Woman, es una de las superheroínas más reconocidas y emblemáticas del mundo de los cómics. Su historia tiene sus raíces en la mitología griega y ha sido reinterpretada y ampliada a lo largo de los años en diferentes adaptaciones y medios.

La historia de la Mujer Maravilla comienza en la isla paradisíaca de Themyscira, también conocida como Isla Paraíso. Este lugar está habitado exclusivamente por las amazonas, un grupo de mujeres guerreras poderosas y valientes que son descendientes de los dioses griegos. La reina de las amazonas es Hipólita, y ella tiene una hija llamada Diana.

Diana Prince, también conocida como Princesa Diana de Themyscira, es elegida por las amazonas para llevar a cabo una misión en el mundo de los hombres. Ella es enviada al mundo exterior para promover la paz y la justicia, y para proteger a los inocentes de las amenazas y peligros que enfrentan.

Una vez en el mundo exterior, Diana adopta la identidad de Wonder Woman. Lleva un traje distintivo que incluye su icónico traje de guerrera, una tiara con estrella, brazaletes indestructibles y un lazo de la verdad. Utiliza sus habilidades excepcionales, como la fuerza sobrehumana, la velocidad, la capacidad de vuelo y la capacidad de sanar rápidamente, para combatir el mal y defender la justicia.

A lo largo de su historia, la Mujer Maravilla ha enfrentado a numerosos enemigos y villanos, incluyendo a Ares, el dios de la guerra, Cheetah, Circe y el Dr. Poison, entre otros. También ha sido miembro destacado de la Liga de la Justicia, un equipo de superhéroes formado por los mejores defensores del mundo.

Además de sus habilidades y poderes extraordinarios, la Mujer Maravilla personifica valores como la verdad, la compasión, la igualdad y la justicia. Se ha convertido en un símbolo de empoderamiento femenino y ha inspirado a generaciones de personas con su valentía y determinación en la lucha por un mundo mejor.

La historia de la Mujer Maravilla ha sido adaptada en cómics, películas, series de televisión y otros medios, dejando un legado duradero y convirtiéndola en una de las heroínas más queridas y reconocidas en el mundo de los superhéroes.`
    },
    { 
      id: 4,
      image: '/assets/LinternaVerde.png',
      name: 'Green Lantern',
      description: `Linterna Verde es el nombre compartido por varios personajes de DC Comics que pertenecen a un cuerpo intergaláctico de guardianes del universo. Cada Linterna Verde es elegido por su fuerza de voluntad y se le otorga un anillo de poder que le confiere habilidades sobrehumanas.

La historia de Linterna Verde se remonta al planeta Oa, donde reside el Cuerpo de Linternas Verdes. Este cuerpo está compuesto por seres de diferentes razas y planetas, cada uno representando un sector del universo. Su misión es mantener el orden y proteger la paz en sus respectivas áreas.

El primer Linterna Verde de la Tierra fue Alan Scott, quien obtuvo su anillo de poder místico y su linterna en la década de 1940. Sin embargo, el Linterna Verde más conocido es Hal Jordan, un piloto de pruebas que fue elegido para ser miembro del Cuerpo de Linternas Verdes. Hal Jordan se convirtió en un valiente y valiente defensor del universo, utilizando su anillo de poder para crear objetos sólidos, volar y proyectar energía.

A lo largo de los años, han surgido otros Linternas Verdes notables, como John Stewart, Guy Gardner, Kyle Rayner y Jessica Cruz, cada uno con su propio estilo y personalidad. Juntos, han enfrentado amenazas cósmicas y luchado contra villanos como Sinestro, el antiguo Linterna Verde caído en desgracia.

La historia de Linterna Verde ha explorado temas de voluntad, coraje y responsabilidad. Los Linternas Verdes deben superar sus miedos y dudas para aprovechar todo el potencial de su anillo de poder. Además, el concepto de la Linterna Verde se ha expandido para incluir otros colores y emociones, como el Sinestro Corps (amarillo), el Red Lantern Corps (rojo) y el Blue Lantern Corps (azul).

La historia de Linterna Verde ha sido narrada en cómics, series de televisión y películas, y ha ganado una base de fanáticos dedicados. Su legado perdura como un símbolo de esperanza, protección y justicia en el vasto universo de DC Comics.`
    }
  ];
  
  constructor() { }

  getHeroById(id: number): Observable<Hero | undefined> {
    const hero = this.heroes.find(h => h.id === id);
    return of(hero);
  }

  getHeroes(): Observable<Hero[]> {
    return of(this.heroes);
  }

 
  
}


