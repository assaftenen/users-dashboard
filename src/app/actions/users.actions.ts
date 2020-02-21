import { IUser } from './../Interfaces/dahsboard.interfaces';
import { Action, props } from '@ngrx/store';

export enum UsersActionTypes {
  AddUser = '[Users] Add User',
  DeleteUser = '[Users] Delete User',
  UpdateUser = '[Users] Update User',
  UsersError = '[Users] Users Error'
}

export class UsersAction implements Action {
  type: string;
  payload: {
    user: IUser,
    error: string
  };
}


export class AddUser implements Action {
  readonly type = UsersActionTypes.AddUser;

  constructor(readonly payload: { user: IUser }) {

  }
}
export class DeleteUser implements Action {
  readonly type = UsersActionTypes.DeleteUser;

  constructor(readonly payload: { user: IUser }) {

  }
}
export class UpdateUser implements Action {
  readonly type = UsersActionTypes.UpdateUser
  constructor(readonly payload: { user: IUser }) {
  }
}

export class UsersError implements Action {
  readonly type = UsersActionTypes.UsersError;

  constructor(readonly payload: { user: IUser }) {

  }
}

export type ActionsUnion = AddUser | UsersError | DeleteUser | UpdateUser;