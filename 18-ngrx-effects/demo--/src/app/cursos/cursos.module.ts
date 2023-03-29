import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { MaterialModule } from '../material.module';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosService } from './services/cursos.service';
//import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { StoreModule } from '@ngrx/store';
import { cursoStateFeatureKey, reducer } from './curso-state.reducer';
import { CursosEffects } from './curso-state.effects';


@NgModule({
  declarations: [
    AgregarCursoComponent,
    DetalleCursoComponent,
    ListaCursosComponent,
    EditarCursoComponent,

    //TablaCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([CursosEffects]),
    StoreModule.forFeature(cursoStateFeatureKey, reducer)
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
