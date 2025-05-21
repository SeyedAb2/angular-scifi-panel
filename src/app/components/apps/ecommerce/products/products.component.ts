import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { LabelType, NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SharedModule,NgbModule,RouterModule,NgxSliderModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public isCollapsed = true;
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  isCollapsed4 = true;

  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b></b> $" + value;
        case LabelType.High:
          return "<b></b> $" + value;
        default:
          return "$" + value;
      }
    }
  };

  productData = [
    {
      src:'./assets/images/ecommerce/jpg/7.jpg',
      offers:'60% Off',
      offerBg:'secondary',
      name:'Mini Chair',
      description:'Compact and versatile, stylish seating',
      rating:'4.3',
      ratinginfo:'2.4k',
      offerprice:'$144',
      price:'$247'
    },
    {
      src:'./assets/images/ecommerce/jpg/10.jpg',
      name:'T-Shirt Half sleeves',
      description:'Casual wear and everyday comfort',
      rating:'4.3',
      ratinginfo:'2.4k',
      offerprice:'$229',
      price:'$1799'
    },
    {
      src:'./assets/images/ecommerce/jpg/8.jpg',
      name:'Ceramic pot',
      description:'Greenery with Ceramic Pot',
      rating:'4.3',
      ratinginfo:'2.4k',
      offerprice:'$540',
      price:'$660'
    },
    {
      src:'./assets/images/ecommerce/jpg/12.jpg',
      offers:'60% Off',
      offerBg:'success',
      name:'Ear Buds',
      description:'Wireless ultimate audio',
      rating:'4.3',
      ratinginfo:'2.4k',
      offerprice:'$1,525',
      price:'$1,899'
    },
    {
      src:'./assets/images/ecommerce/jpg/9.jpg',
      name:'Drone',
      description:'Capturing aerial views and adventures',
      rating:'4.3',
      ratinginfo:'2.4k',
      offerprice:'$559',
      price:'$599'
    },
    {
      src:'./assets/images/ecommerce/jpg/13.jpg',
      name:'Back Pack',
      description:'Carry Your essentials in style',
      rating:'4.3',
      ratinginfo:'2.4k',
      offerprice:'$549',
      price:'$625'
    },
    {
      src:'./assets/images/ecommerce/jpg/14.jpg',
      offers:'60% Off',
      offerBg:'danger',
      name:'Analog Watches',
      description:'Times elegance with Watches',
      rating:'4.3',
      ratinginfo:'2.4k',
      offerprice:'$245',
      price:'$349'
    },
    {
      src:'./assets/images/ecommerce/jpg/15.jpg',
      name:'Handy Bag',
      description:'Effortlessly carry your essentials',
      rating:'4.3',
      ratinginfo:'2.4k',
      offerprice:'$474',
      price:'$649'
    },
    {
      src:'./assets/images/ecommerce/jpg/17.jpg',
      offers:'60% Off',
      offerBg:'secondary',
      name:'Laptop',
      description:'Companion for work',
      rating:'4.3',
      ratinginfo:'2.4k',
      offerprice:'$1,484',
      price:'$1,142'
    },
    {
      src:'./assets/images/ecommerce/jpg/16.jpg',
      name:'Girls Heels',
      description:'Step into sophistication with heels',
      rating:'4.3',
      ratinginfo:'2.4k',
      offerprice:'$548',
      price:'$759'
    },
    {
      src:'./assets/images/ecommerce/jpg/18.jpg',
      name:'Watch',
      description:'fashion for a bold look',
      rating:'4.3',
      ratinginfo:'2.4k',
      offerprice:'$1,544',
      price:'$1,899'
    },
    {
      src:'./assets/images/ecommerce/jpg/11.jpg',
      name:'Digital Camera',
      description:'Prefect high-quality photography',
      rating:'4.3',
      ratinginfo:'2.4k',
      offerprice:'$5,899',
      price:'$6,899'
    },
  ]
}
