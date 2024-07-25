import { AppState } from "../../../../store/app.state";
import { createSelector } from "@ngrx/store";
import { PostsState } from "./posts.state";

export const selectPostsState = (state: AppState) => state.postsState;
export const selectPosts = createSelector(selectPostsState, (state: PostsState) => state.posts);
export const selectPostsByUserId = (userId: number | null) =>
  createSelector(selectPostsState, (state: PostsState) => state.posts.filter(post => post.userId === userId));
