import {
  SET_LOADING,
  SET_POOL_DATA,
  SET_ACTIVE_LINK_ID,
  SET_LIST_DATA,
  SET_DATE_DIAPASON,
  SET_CHART_DATA,
  SET_SWITCH_POSITION,
  SET_VOLUME_TO_LIST,
  SET_EXCHANGE_DATA,
  SET_PRICE_DATA,
  SET_UNISWAP_PRICE,
  SET_BALANCER_PRICE,
  SET_IS_SUCCESS,
  SET_IS_ERROR,
  SKIP_STATUS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SKIP_STATUS:
      return {
        ...state,
        isSuccess: false,
        isError: false,
        errorMessage: "",
      };

    case SET_IS_SUCCESS:
      return {
        ...state,
        isSuccess: action.payload,
      };

    case SET_IS_ERROR:
      return {
        ...state,
        isError: action.payload.status,
        errorMessage: action.payload.msg,
      };

    case SET_BALANCER_PRICE:
      return {
        ...state,
        balancerPrice: action.payload,
      };

    case SET_UNISWAP_PRICE:
      return {
        ...state,
        uniswapPrice: action.payload,
      };

    case SET_PRICE_DATA:
      return {
        ...state,
        priceData: action.dataPrice,
      };

    case SET_POOL_DATA:
      return {
        ...state,
        poolData: action.payload,
      };

    case SET_EXCHANGE_DATA:
      return {
        ...state,
        exchangeData: action.payload,
      };

    case SET_LIST_DATA:
      return {
        ...state,
        list: action.payload,
      };

    case SET_VOLUME_TO_LIST:
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.title === "Volume (24h)") {
            item.info = action.volume;
          }
          return item;
        }),
      };

    case SET_CHART_DATA:
      return {
        ...state,
        chartData: action.payload,
        isLoading: false,
      };

    case SET_SWITCH_POSITION:
      return {
        ...state,
        switchPosition: action.payload,
      };

    case SET_DATE_DIAPASON:
      return {
        ...state,
        dateDiapason: action.payload,
      };

    case SET_ACTIVE_LINK_ID:
      return {
        ...state,
        linkId: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
  }
};
