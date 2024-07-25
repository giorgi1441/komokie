import { Component, inject, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { toSignal } from "@angular/core/rxjs-interop";
import { selectUsers } from "./store/users.selectors";
import { usersActions } from "./store/users.actions";
import { Router } from "@angular/router";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  private _store = inject(Store);
  private _router = inject(Router);
  users = toSignal(this._store.select(selectUsers), { initialValue: [] });

  ngOnInit(): void {
    this._store.dispatch(usersActions.getUsers())
  }

  viewPosts(userId: number) {
    this._router.navigate([ "dashboard/posts" ], {
      queryParams: { id: userId }
    })
  }
}
