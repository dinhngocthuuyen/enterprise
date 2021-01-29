import { createReducer, on } from "@ngrx/store"
import { CollectionStaffApiActions, StaffApiActions } from "../actions"
import { StaffAdapter, StaffInitialState } from "../state"

export const StaffFeatureKey = 'staffs'
export const reducer = createReducer(
    StaffInitialState,
    on(
        StaffApiActions.getsStaff,
        CollectionStaffApiActions.getsStaffSuccess,
        (state, { staffs }) => {
            staffs = staffs

            return StaffAdapter.addMany(
                staffs, 
                state)
        }
    ),
)