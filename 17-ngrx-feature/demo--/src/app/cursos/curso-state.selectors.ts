import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCursoState from './curso-state.reducer';

export const selectCursoStateState = createFeatureSelector<fromCursoState.State>(
  fromCursoState.cursoStateFeatureKey
);
