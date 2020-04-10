import SHOP_DATAS from './shop.data';

import { SHOPDATA_ACTIONS, ShopDataCmd, ShopDatasState } from './shopdata-action';

const initialShopState = {
  datas: SHOP_DATAS,
};


const DataShopReducer = (state: ShopDatasState = initialShopState, action: ShopDataCmd): ShopDatasState => {
  switch (action.type) {
    case SHOPDATA_ACTIONS.GET_DATA:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default DataShopReducer;
