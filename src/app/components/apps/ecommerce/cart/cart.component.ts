import { Component } from '@angular/core';
import swal from 'sweetalert';
import { SharedModule } from '../../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
declare var require: any;

const cartData = [
  {
    id: '1',
    img: './assets/images/ecommerce/jpg/12.jpg',
    name: 'Wireless earbuds, 50H Battery Fast Charging',
    stock:'In Stock',
    stockbg:'success',
    color: 'White',
    offer:'10% off',
    bg: 'secondary',
    text1: 'Save for later',
    text2: 'Share',
    price: '$1,998',
    total: '$3,996',
    quantity: '2',
  },
  {
    id: '2',
    img: './assets/images/ecommerce/jpg/15.jpg',
    name: 'Designed Small Mini Hang Bag for Women',
    stock:'In Stock',
    stockbg:'success',
    color: 'Tri-color',
    offer:'25% off',
    bg: 'secondary',
    text1: 'Save for later',
    text2: 'Share',
    price: '$219',
    total: '$219',
    quantity: '1',
  },
  {
    id: '3',
    img: './assets/images/ecommerce/jpg/9.jpg',
    name: 'Remote control drone with HD Camera 1000mh Mini Battery',
    stock:'In Stock',
    stockbg:'success',
    color: 'Smoke White',
    text1: 'Save for later',
    text2: 'Share',
    price: '$2,144',
    total: '$2,144',
    quantity: '1',
  },
  {
    id: '4',
    img: './assets/images/ecommerce/jpg/10.jpg',
    name: 'Half Sleeves Plain T-shirt Casual for Men',
    stock:'Out of stock',
    stockbg:'danger',
    color: 'Yellow',
    text1: 'Save for later',
    text2: 'Share',
    price: '$199',
    total: '$597',
    quantity: '3',
  },
  {
    id: '5',
    img: './assets/images/ecommerce/jpg/13.jpg',
    name: 'Slim Backpack, Compact, Two-Side Pockets, QuickFit Straps',
    stock:'In Stock',
    stockbg:'success',
    color: 'Orange',
    offer:'15% off',
    bg: 'secondary',
    text1: 'Save for later',
    text2: 'Share',
    price: '$594',
    total: '$594',
    quantity: '1',
  },
  
];

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SharedModule, FormsModule, ReactiveFormsModule, RouterModule,NgbModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items: any[] = [];
  itemIndex!: number;

  ConformAlert(id: string) {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      dangerMode: true,
      buttons: ['Cancel', 'Yes,Delete it!'],
    }).then((willDelete: any) => {
      if (willDelete) {
        const data = this.products.filter((x: { id: string }) => x.id !== id);
        this.products = data;
        swal('Deleted!', 'Your imaginary file has been deleted!', 'success');
      } else {
        // User clicked "Cancel" or closed the alert
        swal('Cancelled', 'Your item is safe :)', 'info');
      }
    });
  }
  products = cartData;

  ngAfterViewInit() {
    const plus: any = document.querySelectorAll('.plus');
    const minus: any = document.querySelectorAll('.minus');
    function perfectChart() {
      plus.forEach((element: any) => {
        let parentDiv = element.parentElement.parentElement;
        element.addEventListener('click', () => {
          parentDiv.children[0].children[1].value++;
        });
      });
      minus.forEach((element: any) => {
        let parentDiv = element.parentElement.parentElement;
        element.addEventListener('click', () => {
          if (parentDiv.children[0].children[1].value > 0) {
            parentDiv.children[0].children[1].value--;
          }
        });
      });
    }
    perfectChart();
  }

  quantity: number = 1;
}
