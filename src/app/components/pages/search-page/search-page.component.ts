import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [SharedModule,NgbModule,RouterModule],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {

allData = [
  {
    src:'./assets/images/company-logos/4.png',
    name :'HTML5 Admin Template Dashboard Design...',
    link:'https://themeforest.net/user/spruko/portfolio',
    discription:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos quiratione voluptatem sequi nesciunt. Neque porro quisquam est, qui doloremipsum consectetur, adipisci velit, sed quia non numquam eiusmodi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    published: "05 March 2024"
  },
  {
    src:'./assets/images/company-logos/2.png',
    name :'Admin Responsive Bootstrap HTML Dashboard Template...',
    link:'https://www.spruko.com/demo/html/',
    discription:'Treal Template included in 30 versions. In the demo 30 versions is shown in 4 floders. And In the final each version has single floder corresponding to that Tags: admin, admin dashboard, admin panel, admin template, backright, bootstrap, bootstrap 4, clean, dashboard, flat, jquery, modern, premium admin templates ...',
    published: "05 March 2024"
  },
  {
    src:'./assets/images/company-logos/7.png',
    name :'New Website Templates from Innovatepix',
    link:'https://spruko.com/demo/html/',
    discription:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    published: "05 March 2024"
  },
  {
    src:'./assets/images/company-logos/6.png',
    name :'Web Hosting HTML Creative Responsive Clean Template From DigitalIntech',
    link:'https://www.spruko.com/demo/html/',
    discription:'HostOne - Web Hosting HTML Creative Responsive Clean Template by sprukosoft HostOne -HTML Templates is a Clean, Simple Responsive Template Design  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magn',
    published: "05 March 2024"
  }
]

imagesData=[
  {
    img:'./assets/images/media/media-40.jpg',
    compony:'InfoPix.pvt.Ltd',
    link:'http://www.InfoPix.pvt.Ltd/'
  },
  {
    img:'./assets/images/media/media-41.jpg',
    compony:'InfoPix.pvt.Ltd',
    link:'http://www.InfoPix.pvt.Ltd/'
  },
  {
    img:'./assets/images/media/media-42.jpg',
    compony:'InfoPix.pvt.Ltd',
    link:'http://www.InfoPix.pvt.Ltd/'
  },
  {
    img:'./assets/images/media/media-43.jpg',
    compony:'InfoPix.pvt.Ltd',
    link:'http://www.InfoPix.pvt.Ltd/'
  },
  {
    img:'./assets/images/media/media-44.jpg',
    compony:'InfoPix.pvt.Ltd',
    link:'http://www.InfoPix.pvt.Ltd/'
  },
  {
    img:'./assets/images/media/media-45.jpg',
    compony:'InfoPix.pvt.Ltd',
    link:'http://www.InfoPix.pvt.Ltd/'
  },
  {
    img:'./assets/images/media/media-46.jpg',
    compony:'InfoPix.pvt.Ltd',
    link:'http://www.InfoPix.pvt.Ltd/'
  },
  {
  img:'./assets/images/media/media-60.jpg',
  compony:'InfoPix.pvt.Ltd',
  link:'http://www.InfoPix.pvt.Ltd/'
}
]

}
