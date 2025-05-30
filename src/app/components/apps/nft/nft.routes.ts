import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'apps/nft',children:[ {
  path: 'create-nft',
  loadComponent: () =>
    import('./create-nft/create-nft.component').then((m) => m.CreateNftComponent),
    title: 'SCIFI - Create Nft'
},
{
  path: 'live-auction',
  loadComponent: () =>
    import('./live-auction/live-auction.component').then(
      (m) => m.LiveAuctionComponent
    ),
    title: 'SCIFI - Live Auction'
},
{
  path: 'market-place',
  loadComponent: () =>
    import('./market-place/market-place.component').then(
      (m) => m.MarketPlaceComponent
    ),
    title: 'SCIFI - Market Place'
},
{
    path: 'nft-details',
    loadComponent: () =>
      import('./nft-details/nft-details.component').then(
        (m) => m.NftDetailsComponent
      ),
      title: 'SCIFI - Nft Details'
  },
  {
    path: 'wallet-integration',
    loadComponent: () =>
      import('./wallet-integration/wallet-integration.component').then(
        (m) => m.WalletIntegrationComponent
      ),
      title: 'SCIFI - Wallet Integration'
  },

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class nftRoutingModule {
  static routes = admin;
}