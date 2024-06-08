import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  BackgroundAnimationComponent,
  ContactUsComponent,
  FooterComponent,
} from './components';
import { ParallaxDirective } from './core/directives';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    ContactUsComponent,
    ParallaxDirective,
    BackgroundAnimationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio-2024';
}
