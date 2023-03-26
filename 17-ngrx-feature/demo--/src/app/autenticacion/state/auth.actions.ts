import { createAction, props } from '@ngrx/store';
import { Sesion } from 'src/app/models/sesion';

export const cargarSesion = createAction(
  '[Auth] Cargar Sesion',
  props<{ sesion: Sesion }>()
);





