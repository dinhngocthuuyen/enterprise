import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Student } from 'src/app/models';
import { StudentManagerCollectionApiActions } from '../actions';


export const studentmanagerFeatureKey = 'students';

export interface StudentManagerState extends EntityState<Student>{
  selectedReviewID: String | null;
}


export const studentmanagerAdapter: EntityAdapter<Student> = createEntityAdapter<Student>({
  selectId: (students: Student) => students._id,
  sortComparer: false,
});

export const studentmanagerInitialState: StudentManagerState = studentmanagerAdapter.getInitialState({
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
  studentmanagerInitialState,
  on(
    // FacultyApiActions.getFaculties,
    StudentManagerCollectionApiActions.loadStudentmanagersSuccess,
      (state, { students }) => {
        students = students

        return studentmanagerAdapter.addMany(
          students,
            state)
      }
  ),

)
