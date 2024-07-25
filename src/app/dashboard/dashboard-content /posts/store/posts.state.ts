import { Post } from "../posts.models";

export interface PostsState {
  loading: boolean;
  error: string | null;
  posts: Array<Post>;
}

export const postsInitialState: PostsState = {
  loading: false,
  error: null,
  posts: []
}
