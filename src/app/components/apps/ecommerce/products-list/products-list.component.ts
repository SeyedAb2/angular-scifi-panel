import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
const DATA=[
  {
    id:'1',
    img:"./assets/images/ecommerce/png/11.png",
    name:'Full Sleeves T-shirt',
    category:"Clothing",
    price:'$1,356 ',
    stock:'457',
    gender:'Male',
    seller:"PrimeFlare Products",
    published:"24,Nov 2023 - 04:42PM"
  },
  {
    id:'2',
    img:"./assets/images/ecommerce/png/14.png",
    name:'Nikkis Digital Camera',
    category:"Gadgets",
    price:'$895 ',
    stock:'451',
    gender:'Male',
    seller:"SparkShift Co.",
    published:"14, Dec 2023 - 02:45AM"
  },
  {
    id:'3',
    img:"./assets/images/ecommerce/png/15.png",
    name:'Easy Chair',
    category:"Furniture",
    price:'$475 ',
    stock:'2,487',
    gender:'Male,Female',
    seller:"Tech Company",
    published:"26,Sep 2023 - 12:23AM"
  },
    {
    id:'4',
    img:"./assets/images/ecommerce/png/16.png",
    name:'Smart Watch(30mm) Pink',
    category:"Watches",
    price:'$1,566 ',
    stock:'475',
    gender:'Female',
    seller:"NexaSync.in.com",
    published:"08,Aug 2023 - 12:15PM"
  },
  {
    id:'5',
    img:"./assets/images/ecommerce/png/10.png",
    name:'Slings chairs',
    category:"Furniture",
    price:'$457',
    stock:'245',
    gender:'Everyone',
    seller:"OmniWave.in",
    published:"18,Aug 2023 - 06:12AM"
  },
  {
    id:'6',
    img:"./assets/images/ecommerce/png/13.png",
    name:' Long lengthy Chair',
    category:"Furniture",
    price:'$895',
    stock:'454',
    gender:'Anyone',
    seller:"Furniture.co.in",
    published:"12,Jul 2023 - 03:45PM"
  },
  {
    id:'7',
    img:"./assets/images/ecommerce/png/12.png",
    name:'Hang bag For Women',
    category:"Accessories",
    price:'$1,298',
    stock:'Out of Stock',
    stockbg:'text-warning',
    gender:'Female',
    seller:"Anthony Lanes",
    published:"02,Jan 2024 - 02:55PM"
  },
  {
    id:'8',
    img:"./assets/images/ecommerce/png/4.png",
    name:'Rounded Ball Chair',
    category:"Furniture",
    price:'$3,499',
    stock:'346',
    gender:'Anyone',
    seller:"SwiftSphere.co.in",
    published:"19,Oct 2023 - 05:47AM"
  },
  {
    id:'9',
    img:"./assets/images/ecommerce/png/23.png",
    name:'Watches with Stripe',
    category:"Watches",
    price:'$1,999',
    stock:'216',
    gender:'Everyone',
    seller:"Ninnan's Corporation",
    published:"04,Aug 2023 - 06:32PM"
  },
]
@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [SharedModule, NgbModule, RouterModule],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  click=(id:string)=>{
    const data = this.products.filter((x: { id: string }) => {
      return x.id != id;
    });
    this.products = data;

  }
products=DATA;

DeleteClick(ProductsData: any) {
  let filterData = this.products.filter((ele) => {
    return ele.id != ProductsData;
  });
  this.products = filterData;
}
}
