import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Coordinator } from 'src/app/models';
import { ProfileApiActions, ProfileCollectionApiActions } from '../actions';


export interface ProfileState extends EntityState<Coordinator>{
  selectedProfileID: String | null;
}

export const profileAdapter: EntityAdapter<Coordinator> = createEntityAdapter<Coordinator>({
  selectId: (coordinator: Coordinator) => coordinator._id,
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
    // ProfileApiActions.loadProfiles,
    ProfileCollectionApiActions.loadProfilesSuccess,
      (state, { coordinators }) => {
        coordinators = coordinators

        return profileAdapter.addMany(
          coordinators,
            state)
      }
  ),
  on(
    // ProfileApiActions.loadProfile,
    ProfileCollectionApiActions.loadProfileSuccess,
    (state, { coordinator }) => {
      coordinator = coordinator

        return profileAdapter.addOne(
          coordinator,
            state)
    }
),
  on(
    ProfileApiActions.updateProfiles,
    // ProfileCollectionApiActions.updateProfilesSuccess,
    (state, { update }) => profileAdapter.updateOne(
        update,
        state)
),
);

