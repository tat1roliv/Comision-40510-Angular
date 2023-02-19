import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';

import { AppRoutingModule } from './app-routing.module';

import { CursoService } from './services/curso.service';
import { CursoAlphaService } from './services/curso-alpha.service';
import { cursos } from './services/cursos.data';

import { env } from 'src/enviroment/enviroment';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
//import { config, token } from './config';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    TablaCursosComponent,
    NoEncontradoComponent,
    InicioComponent,
    DetalleCursoComponent,
    AgregarCursoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
