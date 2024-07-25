import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { Store } from "@ngrx/store";
import { searchUser, selectUsers } from "./store/users.selectors";
import { usersActions } from "./store/users.actions";
import { Router } from "@angular/router";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs";
import { User } from "./users.models";
import { toSignal } from "@angular/core/rxjs-interop";

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [ ReactiveFormsModule ],
    templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
    private _store = inject(Store);
    private _router = inject(Router);
    users = toSignal(this._store.select(selectUsers), { initialValue: [] });
    filteredUsers = signal<Array<User>>([]);
    searchUser = new FormControl(null);

    constructor() {
        effect(() => {
            this.filteredUsers.set(this.users())
        }, { allowSignalWrites: true });
    }

    ngOnInit(): void {
        this._store.dispatch(usersActions.getUsers())

        this.searchUser.valueChanges
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                switchMap((value) => this._store.select(searchUser(value!)))
            )
            .subscribe({
                next: (users: Array<User>) => {
                    this.filteredUsers.set(users)
                }
            })
    }

    viewPosts(userId: number) {
        this._router.navigate([ "dashboard/posts" ], {
            queryParams: { id: userId }
        })
    }
}
