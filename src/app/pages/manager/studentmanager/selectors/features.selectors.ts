import { createFeatureSelector } from "@ngrx/store";
import { FeatureKey,State } from "../reducers";

export const   StudentManagerState = createFeatureSelector<State>(FeatureKey);
