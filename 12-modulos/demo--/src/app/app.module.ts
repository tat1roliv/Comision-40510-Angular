import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';

import { AppRoutingModule } from './app-routing.module';

//import { CursoService } from './services/curso.service';
//import { cursos } from './services/cursos.data';


import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CursosModule } from './cursos/cursos.module';


@NgModule({
  declarations: [
    AppComponent,
    TablaCursosComponent,
    NoEncontradoComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CursosModule,
    MaterialModule,
    //FormsModule,
    //ReactiveFormsModule,
    //FormsModule,
    AppRoutingModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
