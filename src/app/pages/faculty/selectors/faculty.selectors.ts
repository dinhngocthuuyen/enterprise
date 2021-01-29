import { createSelector } from '@ngrx/store';
import { selectFacultiesState } from './features.selectors';
import { FacultyReducer } from '../reducers';
import { facultyAdapter } from '../reducers/faculty.reducers';

export const selectFacultyEntitiesState = createSelector(
  selectFacultiesState,
    state => state[FacultyReducer.facultiesFeatureKey]
)

export const {
    selectIds: selectFacultyIds,
    selectEntities: selectFacultyEntities,
    selectAll: selectAllFaculties,
    selectTotal: selectTotalFaculties
} = facultyAdapter.getSelectors(selectFacultyEntitiesState);

// export const selectCurrentFaculty = (id) => createSelector(
//     selectFacultyEntities,
//     (faculties) => faculties[id]
// )

export const FacultySelectors = {
    selectFacultyEntitiesState,
    selectFacultyIds,
    selectFacultyEntities,
    selectAllFaculties,
    selectTotalFaculties,
    // selectCurrentFaculty
}
