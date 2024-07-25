import { Component, inject, OnInit, signal } from '@angular/core';
import { Store } from "@ngrx/store";
import { postsActions } from "./store/posts.actions";
import { Post } from "./posts.models";
import { PostCardComponent } from "./post-card/post-card.component";
import { selectPosts, selectPostsByUserId } from "./store/posts.selectors";
import { ActivatedRoute, Params } from "@angular/router";
import { iif, switchMap } from "rxjs";
import { Dialog } from "@angular/cdk/dialog";
import { DetailsComponent } from "./details/details.component";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [ PostCardComponent ],
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  private _store = inject(Store);
  private _activatedRoute = inject(ActivatedRoute);
  private _dialog = inject(Dialog);
  posts = signal<Array<Post>>([]);

  ngOnInit(): void {
    this._store.dispatch(postsActions.getPosts());
    this._activatedRoute.queryParams.pipe(
      switchMap((params: Params) => iif(
        (): boolean => params['id'] !== undefined,
        this._store.select(selectPostsByUserId(Number(params['id']))),
        this._store.select(selectPosts))
      )).subscribe({
      next: (posts: Array<Post>) => {
        this.posts.set(posts)
      }
    })
  }

  openDetails(post: Post) {
    this._dialog.open(DetailsComponent, {
      width: '40%',
      data: {
        title: "Post's Details",
        postTitle: post.title,
        body: post.body
      }
    })
  }
}
