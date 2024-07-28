import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./users.models";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _httpClient = inject(HttpClient);

  getUsers(): Observable<Array<User>> {
    return this._httpClient.get<Array<User>>('https://jsonplaceholder.typicode.com/users')
  }
}
