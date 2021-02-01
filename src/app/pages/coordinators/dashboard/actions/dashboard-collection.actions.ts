import { createAction, props } from "@ngrx/store";

// Load list contribution
export const loadContributionsSuccess = createAction(
  '[Dashboard/Contribution] Load Contributions Success',
  props<{ data: any }>()
);

export const loadDashboardsFailure = createAction(
  '[Dashboard/Contribution] Load Contributions Failure',
  props<{ error: any }>()
);
