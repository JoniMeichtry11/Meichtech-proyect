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
      image: "https://media.gq.com.mx/photos/5c927b45c0e463f033a84935/16:9/w_2560%2Cc_limit/restaurante.jpg"
    },
    {
      name: "Cafeterias",
      image: "https://dosg.net/wp-content/uploads/2018/03/cafeteria.jpg"
    },
    {
      name: "Municipalidades",
      image: "https://scontent.fros5-1.fna.fbcdn.net/v/t39.30808-6/301701554_8342042299169052_2973697019035586517_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGFzEEPtHYTnphOTUWDRxpzrW3FE3rOoaetbcUTes6hp26jF4Gg_hhkyhpA6LACvKn-VEe2r_AOZ-QRAq3NUt3g&_nc_ohc=nh2BN898s-AQ7kNvgEjnZ2V&_nc_oc=Adh96OXr9dWVPXFQwiWT0eePf9LNVc0l3tfihI-1l_EXaMsUnWDOUWDGDxdhw0ai8-o&_nc_ht=scontent.fros5-1.fna&oh=00_AfBHqQHD48x9Zo-aAyOobnOz45YSVuD6tGn8g2dUdQdJLg&oe=6630C627"
    },
  ];
}
