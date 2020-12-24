import {
  SET_LOADING,
  SET_POOL_DATA,
  SET_ACTIVE_LINK_ID,
  SET_DAILY_DATA,
  SET_LIST_DATA,
  SET_DATE_DIAPASON,
  SET_CHART_DATA,
  SET_SWITCH_POSITION,
  SET_VOLUME_TO_LIST,
  SET_EXCHANGE_DATA,
  SET_UNISWAP_DATA,
  SET_BALANCER_DATA,
  SET_PRICE_DATA,
  SET_UNISWAP_PRICE,
  SET_BALANCER_PRICE,
  CLEAR_EXCHANGE_DATA,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_UNISWAP_DATA:
      return {
        ...state,
        uniswapData: action.payload,
      };

    case SET_BALANCER_DATA:
      return {
        ...state,
        balancerData: action.payload,
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

    case SET_DAILY_DATA:
      return {
        ...state,
        dailyData: action.payload,
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
