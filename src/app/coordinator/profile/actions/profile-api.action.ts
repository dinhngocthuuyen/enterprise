import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Coordinator } from "src/app/models";

export const loadProfiles = createAction(
    '[Profile] Load Profiles'
  );

  export const loadProfile = createAction(
    '[Profile] Load Profile'
    // props<{ coordinator : Coordinator }>()

  );

  export const updateProfiles = createAction(
    '[Profile/API] update Profile',
    props<{ update: Update<Coordinator> }>(),
  );