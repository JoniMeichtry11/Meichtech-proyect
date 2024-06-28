import { Component } from '@angular/core';
import { Categories } from '../../core/models/Categories';

@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.scss'
})
export class ListCategoriesComponent {
  categories: Categories[] = [
    {
      name: "Restaurantes",
      image: "https://media.gq.com.mx/photos/5c927b45c0e463f033a84935/16:9/w_2560%2Cc_limit/restaurante.jpg",
      link: 'restaurantes',
    },
    {
      name: "Cafeterias",
      image: "https://dosg.net/wp-content/uploads/2018/03/cafeteria.jpg",
      link: 'cafeterias',
    },
    {
      name: "Municipalidades",
      image: "https://www.tresdefebrero.gov.ar/wp-content/uploads/2021/03/Render-1-scaled.jpg",
      link: 'municipalidades',
    },
    {
      name: "Dentistas",
      image: "https://img.freepik.com/foto-gratis/foto-dentista-sonriente-pie-brazos-cruzados-su-colega-mostrando-signo-bien_496169-1043.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1717891200&semt=sph",
      link: 'dentistas'
    },
    {
      name: "Veterinarias",
      image: "https://www.infobae.com/new-resizer/ZnDkR1HUD3VOYyxcl1NfySwaToc=/1440x960/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/L6GI2ZSXFZGADESR57UO666ZE4.jpg",
      link: 'veterinarias'
    }
  ];
}
