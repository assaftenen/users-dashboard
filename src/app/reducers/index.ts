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
  userId: number


}
const initialUsersState: UsersState = {
  usersList: [],
  error: null,
  userId: 0
};

export interface AppState {
  users: UsersState;
}

export const selectUsers = (state: AppState) => state.users.usersList;
export const selectUsersCount = (state: AppState) => state.users.usersList.length;





export function usersReducer(state: UsersState = initialUsersState, action: UsersAction): UsersState {
  debugger
  switch (action.type) {
    case UsersActionTypes.AddUser:
      const { firstName, lastName, age, address, phone } = action.payload.user
      if (firstName && lastName && age && address && phone) {
        const userId = (state.userId) + 1;
        debugger
        return {
          usersList: [...state.usersList, { ...action.payload.user, ...{ userId } }],
          error: null,
          userId: userId
        };
      }
    case UsersActionTypes.DeleteUser:
      return {
        usersList: state.usersList.filter(user => user.userId !== action.payload.user.userId),
        error: null,
        userId: state.userId
      };
    case UsersActionTypes.UpdateUser:
      // let newList: IUser[];
      const isInList = state.usersList.find(user => user.userId === action.payload.user.userId)
      // if in list map the list and update user
      if (isInList) {
        const usersList = state.usersList.map(user => {
          if (isInList.userId === user.userId) {
            return { ...action.payload.user }
          }
          return user;
        })
        return {
          usersList,
          error: null,
          userId: state.userId
        };

      } else {
        return {
          usersList: [...state.usersList, action.payload.user],
          error: null,
          userId: (state.userId) + 1
        }

      }


    case UsersActionTypes.UsersError:
      return {
        usersList: [],
        error: action.payload.error,
        userId: state.userId
      };
    default:
      return state;
  }



}



export const reducers: ActionReducerMap<AppState> = {
  users: usersReducer

};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
