import { combineReducers } from 'redux';
import UserReducer from './User/UserReducer';


const rootReducer = combineReducers({ user: UserReducer });

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
