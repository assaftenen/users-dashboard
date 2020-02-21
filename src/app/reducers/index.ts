import { UsersAction, UsersActionTypes } from './../actions/users.actions';
import { IUser } from './../Interfaces/dahsboard.interfaces';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { } from '../actions/users.actions';



export interface UsersState {
  usersList: IUser[],
  error: string | null

}
const initialUsersState: UsersState = {
  usersList: [],
  error: null
};

export interface AppState {
  users: UsersState;
}


export function usersReducer(state: UsersState = initialUsersState, action: UsersAction): UsersState {
  switch (action.type) {
    case UsersActionTypes.AddUser:
      return {
        usersList: [...state.usersList, action.payload.user],
        error: null
      };
    case UsersActionTypes.DeleteUser:
      return {
        usersList: state.usersList.filter(user => user.phone !== action.payload.user.phone),
        error: null
      };
    case UsersActionTypes.UpdateUser:
      return {
        usersList: state.usersList.map(user => {
          if (user.firstName === action.payload.user.firstName) {
            return action.payload.user
          }
          return user;
        }),
        error: null
      };

    case UsersActionTypes.UsersError:
      return {
        usersList: [],
        error: action.payload.error
      };
    default:
      return state;
  }



}



export const reducers: ActionReducerMap<AppState> = {
  users: usersReducer

};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
