import { UserState } from './User-types';

export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';

// action en fait avec branding sur les constants
export type SetUserAction = {
    type: typeof SET_USER
    payload: UserState

}
export type UnSetUserAction = {
    type: typeof UNSET_USER
    payload: {}

}

// on fabrique la commande type
export const setCurrentUserCmd = (userAuth: UserState): SetUserAction => ({
  type: SET_USER,
  payload: userAuth,
});

export const unsetCurrentUserCmd = (): UnSetUserAction => ({
  type: UNSET_USER,
  payload: {},
});


export type UserActionTypes = SetUserAction | UnSetUserAction;
