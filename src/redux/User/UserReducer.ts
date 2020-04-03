import { ExtraData, UserState } from './User-types';
import { SET_USER, UNSET_USER, UserActionTypes } from './action';

export const initialState: UserState = {
  id: '',
  additionalData: {} as ExtraData,
};

export const UserReducer = (state: UserState = initialState, action: UserActionTypes): UserState => {
  console.log(`reducer enter${JSON.stringify(action)}`);
  console.log(`reducer enter${JSON.stringify(state)}`);
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        id: action.payload.id,
        additionalData: action.payload.additionalData,
      };
    case UNSET_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default UserReducer;
