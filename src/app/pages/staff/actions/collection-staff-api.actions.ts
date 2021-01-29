import { createAction, props } from "@ngrx/store";
import { Staff } from "../models/staff.model";

export const addStaff = createAction(
    '[Staff/API] Add Staff',
    props<{ staff: Staff }>(),
);

