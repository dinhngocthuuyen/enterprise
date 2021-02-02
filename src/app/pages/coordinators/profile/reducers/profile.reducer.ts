import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Coordinator } from 'src/app/models';
import { ProfileCollectionApiActions } from '../actions';


export interface ProfileState extends EntityState<Coordinator>{
  selectedProfileID: String | null;
}

export const profileAdapter: EntityAdapter<Coordinator> = createEntityAdapter<Coordinator>({
  selectId: (coordinators: Coordinator) => coordinators._id,
  sortComparer: false,
});

export const profileInitialState: ProfileState = profileAdapter.getInitialState({
  selectedProfileID: null,
  entities: {
      0: {
          _id: '',
          name: '',
          address: '',
          phone: '',
          dob: '',
          email: '',
        }
  }
})

export const profileFeatureKey = 'coordinators';




export const reducer = createReducer(
  profileInitialState,
  on(
    ProfileCollectionApiActions.loadProfilesSuccess,
      (state, { coordinators }) => {
        coordinators = coordinators

        return profileAdapter.addMany(
          coordinators,
            state)
      }
  ),
);

