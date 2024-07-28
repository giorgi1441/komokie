import { createReducer, on } from "@ngrx/store";
import { postsInitialState } from "./posts.state";
import { postsActions } from "./posts.actions";

export const postsReducer = createReducer(
  postsInitialState,
  on(postsActions.getPosts, (state) => ({
    ...state,
    loading: true
  })),
  on(postsActions.getPostsSuccess, (state, { posts }) => ({
    ...state,
    loading: false,
    posts
  })),
  on(postsActions.getPostsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    posts: [],
    error
  }))
)
