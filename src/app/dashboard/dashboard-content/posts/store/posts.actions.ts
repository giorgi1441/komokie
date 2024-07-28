import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Post } from "../posts.models";

export const postsActions = createActionGroup({
  source: 'posts',
  events: {
    getPosts: emptyProps(),
    getPostsSuccess: props<{ posts: Array<Post> }>(),
    getPostsFailure: props<{ error: string }>(),
  }
})
