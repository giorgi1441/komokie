import { PostsState } from "../dashboard/dashboard-content /posts/store/posts.state";
import { UsersState } from "../dashboard/dashboard-content /users/store/users.state";

export interface AppState {
  postsState: PostsState;
  usersState: UsersState;
}
