import { createAction, props } from "@ngrx/store";
import { Staff } from "../models/staff.model";

// Add Staff
export const addStaffSuccess = createAction(
    '[Staff/API] Add Staff Success',
    props<{ staff: Staff }>(),
);

export const addStaffFailure = createAction(
    '[Staff/API] Add Staff Failure',
    props<{ staff: Staff }>(),
);

// Get Staff
export const getStaffSuccess = createAction(
    '[Staff/API] get Staff Success',
    props<{ staff: Staff }>(),
);

export const getStaffFailure = createAction(
    '[Staff/API] get Staff Failure',
    props<{ errorMsg: any }>(),
);

export const getsStaffSuccess = createAction(
    '[Staff/API] gets Staff Success',
    props<{ staffs: Staff[] }>(),
);

export const getsStaffFailure = createAction(
    '[Staff/API] gets Staff Failure',
    props<{ errorMsg: any }>(),
);