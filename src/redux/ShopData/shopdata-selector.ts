import { createSelector } from 'reselect';
import { RootState } from '../root-reduces';
import { Category, ShopData, ShopDatasState } from './shopdata-action';

export const selectShopDataState = (state: RootState): ShopDatasState =>
  state.shopdatas;
export const selectShopData = (state: RootState): ShopData =>
  state.shopdatas.datas;
export const selectShopDataFilter = (idurl: string) =>
  createSelector([selectShopData], (datas: ShopData): Category | undefined => {
    console.log(`data${JSON.stringify(datas)}`);
    console.log(`data${idurl}`);
    console.log(`extract${datas[idurl]}`);
    return datas[idurl];
  });
export const selectShopDataAsArray = createSelector(
  [selectShopData],
  (datas: ShopData): Category[] =>
    datas ? Object.keys(datas).map((key: string) => datas[key]) : []
);

export const selectFetching = createSelector(
  [selectShopDataState],
  (sstate: ShopDatasState): boolean => sstate.isLoading
);
