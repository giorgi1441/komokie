import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, CreateEffectMetadata, ofType } from "@ngrx/effects";
import { postsActions } from "./posts.actions";
import { mergeMap } from "rxjs";
import { PostsService } from "../posts.service";
import { mapResponse } from "@ngrx/operators";
import { Post } from "../posts.models";

@Injectable()
export class PostsEffects {
  private _actions$ = inject(Actions);
  private _postsService = inject(PostsService);

  posts$: CreateEffectMetadata = createEffect(() => this._actions$.pipe(
    ofType(postsActions.getPosts),
    mergeMap(() => this._postsService.getPosts().pipe(
      mapResponse({
        next: (posts: Array<Post>) => postsActions.getPostsSuccess({ posts }),
        error: (errorCode: string) => postsActions.getPostsFailure({ error: errorCode }),
      })
    ))
  ))
}
