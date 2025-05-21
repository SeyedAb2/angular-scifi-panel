import { Component } from '@angular/core';
import { GalleryModule, Image } from '@ks89/angular-modal-gallery';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Mousewheel,
  Keyboard,
  EffectCube,
  EffectFade,
  EffectFlip,
  EffectCoverflow,
  Swiper,
} from 'swiper';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Mousewheel,
  Zoom,
  Autoplay,
  Thumbs,
  Keyboard,
  EffectCube,
  EffectFade,
  EffectFlip,
  EffectCoverflow,
]);

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [SharedModule,GalleryModule,NgbModule,RouterModule,SwiperModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  isCollapsed = true;

  dotsConfig!: false;

  imagesRect: Image[] = [

    new Image(
      0,
      {
        img: './assets/images/ecommerce/png/1.png', 
       
      },
      { img: './assets/images/ecommerce/png/1.png',
    }
    ),
    new Image(1, { img: './assets/images/ecommerce/png/2.png' }),
    new Image(
      2,
      {
        img: './assets/images/ecommerce/png/3.png',
       
      },
      {
        img: './assets/images/ecommerce/png/3.png',
     
      }
    ),
    new Image(
      3,
      {
        img: './assets/images/ecommerce/png/4.png',
       
      },
      { img: './assets/images/ecommerce/png/4.png',
      }
    ),
    new Image(4, { img: './assets/images/ecommerce/png/2.png' }),
   
  ];

  ngAfterViewInit() {
    this.initSwipers();
  }

  private initSwipers(): void {
    const galleryThumbs = new Swiper('.swiper-view-details', {
      direction: 'horizontal',
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints : {
        0: {
          direction: "horizontal",
          spaceBetween: 1,
      },
      768: {
          direction: "vertical",
          spaceBetween: 1,
      }
      }
    });

    const galleryview = new Swiper('.swiper-preview-details', {
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      freeMode: true,
      watchSlidesProgress: true,
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  }
}
