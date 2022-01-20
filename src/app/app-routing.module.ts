import { NgModule } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule,
    AuthRoutingModule
  ]
})
export class AppRoutingModule { }
