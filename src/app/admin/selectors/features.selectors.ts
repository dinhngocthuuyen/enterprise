import { createFeatureSelector } from "@ngrx/store";
import { FeatureKey,State } from "../reducers";

export const   AdminState = createFeatureSelector<State>(FeatureKey);
