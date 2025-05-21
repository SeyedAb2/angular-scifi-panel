import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'apps/crypto',children:[ {
  path: 'buy-sell',
  loadComponent: () =>
    import('./buy-sell/buy-sell.component').then((m) => m.BuySellComponent),
    title: 'SCIFI - Buy Sell'
},
{
  path: 'currency-exchange',
  loadComponent: () =>
    import('./currency-exchange/currency-exchange.component').then(
      (m) => m.CurrencyExchangeComponent
    ),
    title: 'SCIFI - Currency Exchange'
},
{
  path: 'marketcap',
  loadComponent: () =>
    import('./market-cap/market-cap.component').then(
      (m) => m.MarketCapComponent
    ),
    title: 'SCIFI - Marketcap'
},
{
  path: 'transactions',
  loadComponent: () =>
    import('./transactions/transactions.component').then((m) => m.TransactionsComponent),
    title: 'SCIFI - Transactions'
},
{
    path: 'wallet',
    loadComponent: () =>
      import('./wallet/wallet.component').then((m) => m.WalletComponent),
      title: 'SCIFI - Wallet'
  },

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class cryptoRoutingModule {
  static routes = admin;
}