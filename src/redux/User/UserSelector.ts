import { RootState } from '../root-reduces';
import { UserState } from './User-types';

export const selectUser = (state: RootState): UserState => state.user;
export default selectUser;
