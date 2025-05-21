import { Component } from '@angular/core';
import swal from 'sweetalert';
import { SharedModule } from '../../../../shared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

const DATA=[
  {
id:'1',
img:"./assets/images/ecommerce/jpg/8.jpg",
name:'Ceramic pot',
rating:'4.2',
type:'Greenery with Ceramic Pot',
price:'$540',
price2:'$660',
percent:'72% off',
  },
  {
   id:'2',
  img:"./assets/images/ecommerce/jpg/10.jpg",
  name:'T-Shirt Half sleeves',   
  rating:'4.2',
  type:'Casual wear and everyday comfort',
  price:'$229',
  price2:'$1,799',

   }, 
{
  id:'3',
  img:"./assets/images/ecommerce/jpg/9.jpg",
  name:'Drone',
  rating:'4.2',
  type:'Capturing aerial views and adventures',
  price:'$5,559',
  price2:'$6,599'
},
 {
id:'4',
img:"./assets/images/ecommerce/jpg/13.jpg",
name:'Back Pack',
rating:'4.2',
type:'Carry Your essentials in style',
price:'$549',
price2:'$625',
  },
  {
 id:'5',
 img:"./assets/images/ecommerce/jpg/15.jpg",
 name:'Handy Bag',
 rating:'4.2',
 type:'Effortlessly carry your essentials',
 price:'$474',
 price2:'$649',
},
{
  id:'6',
  img:"./assets/images/ecommerce/jpg/7.jpg",
  name:'Mini Chair',
  rating:'4.2',
  type:'Compact and versatile, stylish seating',
  price:'$144',
  price2:'$247',
 },
 {
id:'7',
img:"./assets/images/ecommerce/jpg/16.jpg",
name:'Girls Heels',
rating:'4.2',
type:'Step into sophistication with heels',
price:'$548',
price2:'$759',
  },
  {
 id:'8',
 img:"./assets/images/ecommerce/jpg/17.jpg",
 name:'Laptop',
 rating:'4.2',
 type:'Companion for work',
 price:'$15,484',
 price2:'$18,799',

},
{
  id:'9',
  img:"./assets/images/ecommerce/jpg/12.jpg",
  name:'Ear Buds',
  rating:'4.2',
  type:'Wireless ultimate audio',
  price:'$1,525',
  price2:'$1,899',
 },
 {
id:'10',
img:"./assets/images/ecommerce/jpg/18.jpg",
name:'Watch',
rating:'4.1',
type:'fashion and functionality for a bold look',
price:'$1,544',
price2:'$1,899',
  },
  {
    id:'11',
    img:"./assets/images/ecommerce/jpg/10.jpg",
    name:'T-Shirt Half sleeves',
    rating:'4.1',
    type:'Compact and versatile, stylish seating',
    price:'$144',
    price2:'$247',
      },
      {
        id:'12',
        img:"./assets/images/ecommerce/jpg/14.jpg",
        name:'Analog Watches',
        rating:'4.1',
        type:'Times elegance with Watches',
        price:'$245',
        price2:'$349',
          },
]
@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [SharedModule, NgbModule, RouterModule],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  products=DATA;
  ConformAlert(id:string) {
    swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        dangerMode: true,
        buttons: ["Cancel", "Yes,Delete it!"],
      })
      .then((willDelete: any) => {
        if (willDelete) {
         const data = this.products.filter((x: { id: string }) => x.id !== id);
         this.products = data;
          swal("Deleted!", "Your imaginary file has been deleted!", "success");
        }
        else {
         // User clicked "Cancel" or closed the alert
         swal("Cancelled", "Your item is safe :)", "info");
       }
      });
     
     }
}
