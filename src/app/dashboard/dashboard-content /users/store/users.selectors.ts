import { AppState } from "../../../../store/app.state";
import { createSelector } from "@ngrx/store";
import { UsersState } from "./users.state";

export const selectUsersState = (state: AppState) => state.usersState;
export const selectUsers = createSelector(selectUsersState, (state: UsersState) => state.users);
