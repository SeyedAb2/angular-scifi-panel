      import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
      
      export const admin: Routes = [
       {path:'apps/ecommerce',children:[ {
        path: 'addproduct',
        loadComponent: () =>
          import('./addproduct/addproduct.component').then((m) => m.AddproductComponent),
          title: 'SCIFI - Add Product'
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./cart/cart.component').then(
            (m) => m.CartComponent
          ),
          title: 'SCIFI - Cart'
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('./checkout/checkout.component').then(
            (m) => m.CheckoutComponent
          ),
          title: 'SCIFI - Checkout'
      },
      {
        path: 'edit-products',
        loadComponent: () =>
          import('./editproducts/editproducts.component').then((m) => m.EditproductsComponent),
          title: 'SCIFI - Edit Products'
      },
      {
        path: 'orderdetails',
        loadComponent: () =>
          import('./orderdetails/orderdetails.component').then((m) => m.OrderdetailsComponent),
          title: 'SCIFI - Order Details'
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./orders/orders.component').then((m) => m.OrdersComponent),
          title: 'SCIFI - Orders'
      },
      {
        path: 'product-details',
        loadComponent: () =>
          import('./product-details/product-details.component').then((m) => m.ProductDetailsComponent),
          title: 'SCIFI - Product Details'
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./products/products.component').then((m) => m.ProductsComponent),
          title: 'SCIFI - Products'
      },
      {
        path: 'products-list',
        loadComponent: () =>
          import('./products-list/products-list.component').then((m) => m.ProductsListComponent),
          title: 'SCIFI - Products List'
      },
      {
        path: 'wishlist',
        loadComponent: () =>
          import('./wishlist/wishlist.component').then((m) => m.WishlistComponent),
          title: 'SCIFI - Wishlist'
      },
 
      
      ]}
      ];
      @NgModule({
        imports: [RouterModule.forChild(admin)],
        exports: [RouterModule],
      })
      export class ecommerceRoutingModule {
        static routes = admin;
      }