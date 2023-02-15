import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';

import { CursoService } from './services/curso.service';
import { CursoAlphaService } from './services/curso-alpha.service';
import { cursos } from './services/cursos.data';

import { env } from 'src/enviroment/enviroment';
//import { config, token } from './config';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    TablaCursosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
