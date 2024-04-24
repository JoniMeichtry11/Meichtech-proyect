import { Component } from '@angular/core';
import { MainComponent } from '../../layout';
import { ListCategoriesComponent } from '../../components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainComponent,
    ListCategoriesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
