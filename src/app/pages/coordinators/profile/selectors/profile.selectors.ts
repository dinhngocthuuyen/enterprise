import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileReducer } from '../reducers';
import { profileAdapter } from '../reducers/profile.reducer';
import { selectProfileState } from './features.selector';

export const selectProfileEntitiesState = createSelector(
    selectProfileState,
      state => state[ProfileReducer.profileFeatureKey]
  )
  
  export const {
      selectIds: selectProfileIds,
      selectEntities: selectProfileEntities,
      selectAll: selectAllProfiles,
      selectTotal: selectTotalProfiles
  } = profileAdapter.getSelectors(selectProfileEntitiesState);
  
  export const selectCurrentProfile = (_id) => createSelector(
      selectProfileEntities,
      (coordinators) => coordinators[_id]
  )
  
  export const ProfileSelectors = {
      selectProfileEntitiesState,
      selectProfileIds,
      selectProfileEntities,
      selectAllProfiles,
      selectTotalProfiles,
      selectCurrentProfile
  }