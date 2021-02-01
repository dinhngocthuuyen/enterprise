import { createAction, props } from "@ngrx/store";
import { Contribution } from "src/app/models";

// Load list contribution
export const loadContributionsSuccess = createAction(
  '[Dashboard/Contribution] Load Contributions Success',
  props<{ contributions: Contribution[] }>()
);

export const loadContributionsFailure = createAction(
  '[Dashboard/Contribution] Load Contributions Failure',
  props<{ error: any }>()
);
