import { createFeatureSelector } from "@ngrx/store";
import { FeatureKey,State } from "../reducers";

export const selectReviewState = createFeatureSelector<State>(FeatureKey);
