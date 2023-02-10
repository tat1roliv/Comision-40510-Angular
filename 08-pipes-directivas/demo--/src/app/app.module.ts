import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './components/material/material.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarCursoDialogComponent } from './components/editar-curso-dialog/editar-curso-dialog.component';
import { FormatoFechaPipe } from './pipes/formato-fecha.pipe';
import { BooleanoATextoPipe } from './pipes/booleano-a-texto.pipe';
import { BooleanoEstiloDirective } from './directives/booleano-estilo.directive';
import { FiltroCursosPipe } from './pipes/filtro-cursos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    EditarCursoDialogComponent,
    FormatoFechaPipe,
    BooleanoATextoPipe,
    BooleanoEstiloDirective,
    FiltroCursosPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
