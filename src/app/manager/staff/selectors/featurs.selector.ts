import { createFeatureSelector } from "@ngrx/store";
import { FeatureKey, State } from "../reducers";

export const selectStaffState = createFeatureSelector<State>(FeatureKey);