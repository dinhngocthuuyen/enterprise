import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Coordinator } from "src/app/models";
import { User } from "src/app/models/user";

export const loadProfiles = createAction(
    '[Profile] Load Profiles'
  );

  export const loadProfile = createAction(
    '[Profile] Load Profile',
    props<{ coordinator : Coordinator }>()

  );

  export const updateProfiles = createAction(
    '[Profile/API] update Profile',
    props<{ update: Update<Coordinator> }>(),
  );

  export const loadCurrentUser = createAction(
    '[User] Load current user',
    props<{ user: User }>()
  );
