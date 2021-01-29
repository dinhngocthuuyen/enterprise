import { createAction, props } from "@ngrx/store";
import { Staff } from "../models/staff.model";
import { StaffComponent } from "../staff.component"

// Add Staff
export const addStaffSuccess = createAction(
    '[Staff/API] Add Staff Success',
    props<{ staff: Staff }>(),
);

export const addStaffFailure = createAction(
    '[Staff/API] Add Staff Failure',
    props<{ staff: Staff }>(),
);
