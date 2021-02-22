import { createFeatureSelector } from '@ngrx/store';
import { State, FeatureKey } from '../reducers';

export const selectFacultiesState = createFeatureSelector<State>(FeatureKey);
