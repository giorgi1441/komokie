import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, CreateEffectMetadata, ofType } from "@ngrx/effects";
import { UsersService } from "../users.service";
import { usersActions } from "./users.actions";
import { iif, mergeMap, of } from "rxjs";
import { concatLatestFrom, mapResponse } from "@ngrx/operators";
import { User } from "../users.models";
import { Store } from "@ngrx/store";
import { selectUsers } from "./users.selectors";

@Injectable()
export class UsersEffects {
    private _actions$ = inject(Actions);
    private _store = inject(Store);
    private _usersService = inject(UsersService);

    users$: CreateEffectMetadata = createEffect(() => this._actions$.pipe(
        ofType(usersActions.getUsers),
        concatLatestFrom(() => this._store.select(selectUsers)),
        mergeMap(([ _, users ]) => {
            return iif(() => users && users.length > 0,
                of(usersActions.getUsersSuccess({ users })),
                this._usersService.getUsers().pipe(
                    mapResponse({
                        next: (users: Array<User>) => usersActions.getUsersSuccess({ users }),
                        error: (errorCode: string) => usersActions.getUsersFailure({ error: errorCode }),
                    })
                )
            )
        })
    ))
}

