import { AuthenticatedComponent } from './layouts/authenticated/authenticated.component';
import { LoginComponent } from './public/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './layouts/public/public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children : [
      {path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent}
    ]
  },
  {
    path: 'authenticated',
    component: AuthenticatedComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
