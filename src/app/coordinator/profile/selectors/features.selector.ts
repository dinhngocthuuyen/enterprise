import { createFeatureSelector } from "@ngrx/store";
import { FeatureKey,State } from "../reducers";

export const selectProfileState = createFeatureSelector<State>(FeatureKey);
