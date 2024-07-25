import { User } from "../users.models";

export interface UsersState {
  loading: boolean;
  error: string | null;
  users: Array<User>;
}

export const initialUsersState: UsersState = {
  loading: false,
  error: null,
  users: []
}
