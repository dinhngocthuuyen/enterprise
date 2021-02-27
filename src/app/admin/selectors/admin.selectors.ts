import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdminReducer } from '../reducers';
import { adminAdapter } from '../reducers/admin.reducers';
import { AdminState } from './features.selectors';


export const selectAdminEntitiesState = createSelector(
    AdminState,
      state => state[AdminReducer.adminFeatureKey]
  )

export const {
    selectIds: selectAdminIds,
    selectEntities: selectAdminEntities,
    selectAll: selectAllAdmin,
    selectTotal: selectTotalAdmin
} = adminAdapter.getSelectors(selectAdminEntitiesState);

export const selectCurrentAdmin = (id) => createSelector(
    selectAdminEntities,
    (admins) => admins[id]
)

export const AdminSelectors = {
    selectAdminEntitiesState,
    selectAdminIds,
    selectAdminEntities,
    selectAllAdmin,
    selectTotalAdmin,
    selectCurrentAdmin
}