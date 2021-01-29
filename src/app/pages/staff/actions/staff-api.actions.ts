import { createAction, props } from "@ngrx/store";
import { Staff } from "../models/staff.model";
import { StaffComponent } from "../staff.component"

export const addStaff = createAction(
    '[Staff/API] Add Staff',
    props<{ staff: Staff }>(),
);

export const getStaff = createAction(
    '[Staff/API] Get Staff',
    props<{ staffs: Staff }>(),
);

export const getsStaff = createAction(
    '[Staff/API] Gets Staff',
    props<{ staffs: Staff[] }>(),
);
