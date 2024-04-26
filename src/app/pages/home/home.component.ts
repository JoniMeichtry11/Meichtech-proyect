import { Component } from '@angular/core';
import { MainComponent } from '../../layout';
import { ListCategoriesComponent, WelcomeComponent } from '../../components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainComponent,
    WelcomeComponent,
    ListCategoriesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
