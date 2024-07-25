import { AppState } from "./app.state";
import { ActionReducerMap } from "@ngrx/store";
import { postsReducer } from "../dashboard/dashboard-content /posts/store/posts.reducer";
import { usersReducer } from "../dashboard/dashboard-content /users/store/users.reducer";

export const APP_REDUCER: ActionReducerMap<AppState> = {
  postsState: postsReducer,
  usersState: usersReducer,
}
