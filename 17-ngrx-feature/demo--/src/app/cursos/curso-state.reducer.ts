import { createFeature, createReducer, on } from '@ngrx/store';
import * as CursoStateActions from './curso-state.actions';

export const cursoStateFeatureKey = 'cursoState';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(CursoStateActions.cargarCursoState, state => state),

);

export const cursoStateFeature = createFeature({
  name: cursoStateFeatureKey,
  reducer,
});

