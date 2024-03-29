import { createAction, props } from '@ngrx/store';
import { Curso } from '../models/curso';

export const cargarCursoState = createAction(
  '[CursoState] Cargar CursoState'
);

export const cursosCargados = createAction(
  '[CursoState] Cursos cargados',
  props<{ cursos: Curso[] }>()
);




