import { createSelector } from 'reselect';
import { RootState } from '../root-reduces';
import { ShopData } from './shopdata-action';


export const selectShopData = (state: RootState): ShopData => state.shopdatas.datas;
export const selectShopDataFilter = (idurl: string) => createSelector([selectShopData], (datas: ShopData) => datas[idurl]);
export const selectShopDataAsArray = createSelector([selectShopData], (datas: ShopData) => Object.keys(datas).map((key: string) => datas[key]));
