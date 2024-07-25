import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from "./posts.models";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly _httpClient = inject(HttpClient);

  getPosts(): Observable<Array<Post>> {
    return this._httpClient.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts')
  }
}
