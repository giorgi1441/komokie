import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { User } from "../users.models";

export const usersActions = createActionGroup({
  source: 'users',
  events: {
    getUsers: emptyProps(),
    getUsersSuccess: props<{ users: Array<User> }>(),
    getUsersFailure: props<{ error: string }>(),
  }
})
