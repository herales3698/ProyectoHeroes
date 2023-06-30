import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule, Routes } from '@angular/router';
import { InformacionHeroesComponent } from './informacion-heroes/informacion-heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardHeroesDcComponent } from './dashboard-heroes-dc/dashboard-heroes-dc.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HeroesDcCarouselComponent } from './heroes-dc-carousel/heroes-dc-carousel.component';


//instanciamos las rutas para los diferentes componentes 

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: DashboardHeroesDcComponent, data: { breadcrumbLabel: 'heroes' } },
  { path: '', component: DashboardHeroesDcComponent, data: { breadcrumbLabel: 'Home' } },
  { path: 'heroes/:id', component: InformacionHeroesComponent , data: { breadcrumbLabel: 'detalles heroes' } },
  { path: 'detalles', component: InformacionHeroesComponent , data: { breadcrumbLabel: 'detalles heroes' } },
  { path: 'carousel', component: HeroesDcCarouselComponent, data: { breadcrumbLabel: 'carouselheroes' } },
];





@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    InformacionHeroesComponent,
    MenuNavegacionComponent,
    DashboardHeroesDcComponent,
    HeroesDcCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  
    MatToolbarModule,
  
    MatButtonModule,
  
    MatSidenavModule,
  
    MatIconModule,
  
    MatListModule,
  
    MatGridListModule,
  
    MatCardModule,
  
    MatMenuModule,
  
    MatIconModule,
  
    MatButtonModule,

    BrowserModule,
    
  ]
  ],
  providers: [],
  bootstrap: [AppComponent],

  exports: [RouterModule]
})
export class AppModule { }
