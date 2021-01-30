import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Faculty } from 'src/app/models';
import { FacultyApiActions, FacultyCollectionApiActions } from '../actions';

export interface FacultyState extends EntityState<Faculty>{
  selectedFacultyID: number | null;
}

export const facultyAdapter: EntityAdapter<Faculty> = createEntityAdapter<Faculty>({
  selectId: (faculty: Faculty) => faculty.id,
  sortComparer: false,
});

export const facultyInitialState: FacultyState = facultyAdapter.getInitialState({
  selectedFacultyID: null,
  entities: {
      0: {
          id: 0,
          name: '',
      }
  }
})

export const facultiesFeatureKey = 'faculties'

export const reducer = createReducer(
  facultyInitialState,
    on(
      // FacultyApiActions.getFaculties,
      FacultyCollectionApiActions.loadFacultySuccess,
        (state, { faculties }) => {
          faculties = faculties

          return facultyAdapter.addMany(
            faculties,
              state)
        }
    ),
    on(
      FacultyApiActions.getFaculty,
      FacultyCollectionApiActions.loadSelectedFacultySuccess,
        (state, { faculty }) => {
          faculty = faculty

          return facultyAdapter.addOne(
              faculty,
              state)
        }
    ),
)
