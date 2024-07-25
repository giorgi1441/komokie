import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, CreateEffectMetadata, ofType } from "@ngrx/effects";
import { UsersService } from "../users.service";
import { usersActions } from "./users.actions";
import { mergeMap } from "rxjs";
import { mapResponse } from "@ngrx/operators";
import { User } from "../users.models";

@Injectable()
export class UsersEffects {
  private _actions$ = inject(Actions);
  private _usersService = inject(UsersService);

  users$: CreateEffectMetadata = createEffect(() => this._actions$.pipe(
    ofType(usersActions.getUsers),
    mergeMap(() => this._usersService.getUsers().pipe(
      mapResponse({
        next: (users: Array<User>) => usersActions.getUsersSuccess({ users }),
        error: (errorCode: string) => usersActions.getUsersFailure({ error: errorCode }),
      })
    ))
  ))
}
