import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    children: [
    { path: 'login',
      component: LoginComponent
     },
    { path: 'registro',
    component: RegistroComponent
     },
    { path: 'form',
     component: FormComponent
     },
    { path: '',
      redirectTo: '/form',
      pathMatch: 'full'
     }
    ]
  }
]



@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
