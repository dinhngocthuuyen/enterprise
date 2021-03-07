import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Admin } from 'src/app/models';
import { AdminCollectionApiActions } from '../actions';


export const adminFeatureKey = 'admins';

export interface AdminState extends EntityState<Admin>{
  selectedReviewID: String | null;
}


export const adminAdapter: EntityAdapter<Admin> = createEntityAdapter<Admin>({
  selectId: (admins: Admin) => admins._id,
  sortComparer: false,
});

export const adminInitialState: AdminState = adminAdapter.getInitialState({
  selectedReviewID: null,
  entities: {
      0: {
        _id: '',
        name: '',
        address: '',
        phone: 0,
        }
  }
})

export const reducer = createReducer(
  adminInitialState,
  on(
    // FacultyApiActions.getFaculties,
    AdminCollectionApiActions.loadAdminSuccess,
      (state, { admins }) => {
        admins = admins

        return adminAdapter.addMany(
          admins,
            state)
      }
  ),

)
