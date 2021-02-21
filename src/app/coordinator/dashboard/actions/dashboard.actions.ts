import { createAction, props } from '@ngrx/store';
import { Contribution } from 'src/app/models';

export const loadContributions = createAction(
  '[Dashboard/Contribution] Load List Contributions'
);

export const loadContribution = createAction(
  '[Dashboard/Contribution] Load Contribution',
  props<{ contribution: Contribution }>(),
);
