import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Staff } from "../models/staff.model";

export interface StaffState extends EntityState<Staff>{
    selectedStaffID: number | null;
}

export const StaffAdapter: EntityAdapter<Staff> = createEntityAdapter<Staff>({
    selectId: (staff: Staff) => staff.id,
});

export const StaffInitialState: StaffState = StaffAdapter.getInitialState({
    selectedStaffID: null,
    entities: {
        0: {
            id: 0,
            Name: '',
           
        }
    }
})