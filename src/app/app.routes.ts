import { Routes } from '@angular/router';
import { HomeComponent, ListProyectsComponent, NotFoundComponent, RestaurantesComponent } from './pages';

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'restaurantes', component: RestaurantesComponent
  },
  {
    path: 'proyects/:category', component: ListProyectsComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];
