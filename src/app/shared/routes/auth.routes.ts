import { RouterModule, Routes } from '@angular/router';
import { admin, authenticationRoutingModule } from '../../components/authentication/authentication.routes';
import { errorRoutingModule } from '../../components/error/error.routes';
import { NgModule } from '@angular/core';

export const authen: Routes = [
    { path: '', children: [ 
        ...authenticationRoutingModule.routes,
        ...errorRoutingModule.routes
 ] },
]

@NgModule({
    imports: [RouterModule.forRoot(authen, {
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'top',
      })],
    exports: [RouterModule]
})
export class AuthenticationsRoutingModule { }