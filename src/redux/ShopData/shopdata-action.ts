import { Action } from 'redux';
import { Item } from './Item';

import SHOP_DATAS_FILE from './shop.data';

export type Category = {
    [key: string]: Item[] | number | string,
    id: number;
    title: string;
    routeName: string;
    items: Item[];
}


export type ShopData = {
    [key: string]: Category,

    hats: Category,
    sneakers: Category,
    jackets: Category,
    womens: Category,
    mens: Category,
}

export type ShopDatasState = {
    datas: ShopData;
}


// Action
export enum SHOPDATA_ACTIONS {
    GET_DATA = 'Data/GET',
}

export type getDataCmd = Action<SHOPDATA_ACTIONS.GET_DATA> & { payload: ShopData };
export type ShopDataCmd = getDataCmd;
export const createGetDataCMD = (): getDataCmd => ({
  type: SHOPDATA_ACTIONS.GET_DATA, payload: SHOP_DATAS_FILE,
});
