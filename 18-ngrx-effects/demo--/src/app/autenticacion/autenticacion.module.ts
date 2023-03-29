import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionInicioComponent } from './components/autenticacion-inicio/autenticacion-inicio.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { authFeatureKey, reducer } from './state/auth.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
//import { AuthEffects } from './state/auth.effects';

@NgModule({
  declarations: [
    AutenticacionInicioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    SharedModule,
    StoreModule.forFeature(authFeatureKey, reducer),
    //EffectsModule.forFeature([AuthEffects]),
  ]
})
export class AutenticacionModule { }
