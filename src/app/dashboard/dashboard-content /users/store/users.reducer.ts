import { createReducer, on } from "@ngrx/store";
import { initialUsersState } from "./users.state";
import { usersActions } from "./users.actions";

export const usersReducer = createReducer(
  initialUsersState,
  on(usersActions.getUsers, (state) => ({
    ...state,
    loading: true,
    error: null,
    users: []
  })),
  on(usersActions.getUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    error: null,
    users
  })),
  on(usersActions.getUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
    users: []
  }))
)
