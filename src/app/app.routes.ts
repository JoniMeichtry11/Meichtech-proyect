import { Routes } from '@angular/router';
import { HomeComponent, ListProyectsComponent, NotFoundComponent } from './pages';

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'proyects/:category', component: ListProyectsComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];
