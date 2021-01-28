import { createReducer, on } from '@ngrx/store';
import { Action, InitialState } from '@ngrx/store/src/models';
import { increment, decrement, reset } from './example.action';

export const initialState = 0;

const _exampleReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function exampleReducer(state = initialState, action: Action) {
  return _exampleReducer(state, action);
}