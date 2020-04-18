import { ActionCreator, Dispatch } from 'redux';
import * as firebase from 'firebase';
import { ThunkAction } from 'redux-thunk';
import { Item } from './Item';
import { RootState } from '../root-reduces';
import { AppActions } from '../root-actions';
import { fstore, getdataFromFirebase } from '../../datafire/firebase.util';

type CREF = firebase.firestore.CollectionReference;

export type Category = {
  [key: string]: Item[] | number | string;
  id: string;
  title: string;
  routeName: string;
  items: Item[];
};

export type ShopData = {
  [key: string]: Category;

  hats: Category;
  sneakers: Category;
  jackets: Category;
  womens: Category;
  mens: Category;
};

export type ShopDatasState = {
  datas: ShopData;
  isLoading: boolean;
  errorMessage: string;
};

// Action
export enum SHOPDATA_ACTIONS {
  FETCH_DATA_END = 'Data/end',
  FETCH_DATA_START = 'Data/Start',
  FETCH_SUCCESS = 'Data/OK',
  FETCH_FAILURE = 'Data/KO',
}

interface FetchCollectionSuccess {
  type: SHOPDATA_ACTIONS;
  payload: ShopData;
}

interface FetchCollectionFail {
  type: SHOPDATA_ACTIONS;
  payload: any;
}

interface FetchCollectionStart {
  type: SHOPDATA_ACTIONS;
}

export type ShopAction = FetchCollectionFail &
  FetchCollectionSuccess &
  FetchCollectionStart;
export const fetchCollecionStart: ActionCreator<ThunkAction<
  Promise<ShopAction>,
  RootState,
  null,
  AppActions
>> = () => {
  const colRef: CREF = fstore.collection('collections');
  return async (dispatch: Dispatch): Promise<ShopAction> => {
    try {
      const querySnapshot = await colRef.get();
      const fetchCollectionStart: FetchCollectionStart = {
        type: SHOPDATA_ACTIONS.FETCH_DATA_START,
      };
      dispatch(fetchCollectionStart);

      const datas: ShopData = await getdataFromFirebase(querySnapshot);
      const fetchCollectionSuccess: FetchCollectionSuccess = {
        type: SHOPDATA_ACTIONS.FETCH_SUCCESS,
        payload: datas,
      };
      return dispatch(fetchCollectionSuccess);
    } catch (error) {
      const fetchCollectionFail: FetchCollectionFail = {
        type: SHOPDATA_ACTIONS.FETCH_FAILURE,
        payload: error,
      };
      return dispatch(fetchCollectionFail);
    }
  };
};
