import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionInicioComponent } from './components/autenticacion-inicio/autenticacion-inicio.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: AutenticacionInicioComponent, children: [
    { path: 'login', component: LoginComponent }
  ]}
]

@NgModule({
  declarations: [
    AutenticacionInicioComponent,
    LoginComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacionModule { }
