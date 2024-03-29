import { createFeatureSelector, createSelector } from '@ngrx/store';
//import * as fromAuth from './auth.reducer';
import * as fromAuth from '../state/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.AuthState>(
  fromAuth.authFeatureKey
);
export const selectSesionState = createSelector(
  selectAuthState,
  (state) => {
    return state.sesion
  }
);

export const selectSesionActiva = createSelector(
  selectAuthState,
  (state) => state.sesion.sesionActiva
);

export const selectUsuarioActivo = createSelector(
  selectAuthState,
  (state) => state.sesion.usuarioActivo
);



