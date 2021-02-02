import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentManagerReducer } from '../reducers';
import { studentmanagerAdapter } from '../reducers/studentmanager.reducer';
import { StudentManagerState } from './features.selectors';


export const selectStudentManagerEntitiesState = createSelector(
    StudentManagerState,
      state => state[StudentManagerReducer.studentmanagerFeatureKey]
  )

export const {
    selectIds: selectStudentManagerIds,
    selectEntities: selectStudentManagerEntities,
    selectAll: selectAllStudentManager,
    selectTotal: selectTotalStudentManager
} = studentmanagerAdapter.getSelectors(selectStudentManagerEntitiesState);

export const selectCurrentStudentManager = (id) => createSelector(
    selectStudentManagerEntities,
    (students) => students[id]
)

export const FacultySelectors = {
    selectStudentManagerEntitiesState,
    selectStudentManagerIds,
    selectStudentManagerEntities,
    selectAllStudentManager,
    selectTotalStudentManager,
    selectCurrentStudentManager
}