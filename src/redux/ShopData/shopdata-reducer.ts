import {
  ShopData,
  SHOPDATA_ACTIONS,
  ShopAction,
  ShopDatasState,
} from './shopdata-action';

const initialShopState = {
  datas: {} as ShopData,
  isLoading: false,
  errorMessage: '',
};

const DataShopReducer = (
  state: ShopDatasState = initialShopState,
  action: ShopAction
): ShopDatasState => {
  switch (action.type) {
    case SHOPDATA_ACTIONS.FETCH_DATA_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SHOPDATA_ACTIONS.FETCH_SUCCESS: {
      return {
        ...state,
        datas: action.payload,
        isLoading: false,
      };
    }
    case SHOPDATA_ACTIONS.FETCH_FAILURE: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
};
export default DataShopReducer;
