import { Routes } from '@angular/router';
import {
  CafeteriasComponent,
  HomeComponent,
  ListProyectsComponent,
  MunicipalidadComponent,
  NotFoundComponent,
  RestaurantesComponent,
  VeterinariaComponent,
} from './pages';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'restaurantes',
    component: RestaurantesComponent,
  },
  {
    path: 'cafeterias',
    component: CafeteriasComponent,
  },
  {
    path: 'veterinarias',
    component: VeterinariaComponent,
  },
  {
    path: 'municipalidades',
    component: MunicipalidadComponent,
  },
  {
    path: 'proyects/:category',
    component: ListProyectsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
