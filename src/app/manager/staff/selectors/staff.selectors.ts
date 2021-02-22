import { createSelector } from "@ngrx/store";
import { StaffReducer } from "../reducers";
import { StaffAdapter } from "../state";
import { selectStaffState } from "./featurs.selector";

export const selectStaffEntitiesState = createSelector(
    selectStaffState,
    state => state[StaffReducer.StaffFeatureKey]
)

export const {
    selectIds: selectStaffIds,
    selectEntities: selectStaffEntities,
    selectAll: selectAllStaffs,
  selectTotal: selectTotalStaffs
} = StaffAdapter.getSelectors(selectStaffEntitiesState);

export const StaffSelectors = {
    selectStaffEntitiesState,
    selectStaffIds,    
    selectStaffEntities,
    selectAllStaffs,
    selectTotalStaffs
}

export const selectCurrentStaff = (id: string | number) => createSelector(
    selectStaffEntities,
    (staffs) => staffs[id]
)