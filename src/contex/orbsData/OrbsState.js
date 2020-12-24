import React, { useReducer } from "react";
import axios from "axios";
import moment from "moment";

import ORBSContext from "./orbsContext";
import OrbsReducer from "./orbsReducer";
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

  SET_PRICE_DATA,
  SET_UNISWAP_PRICE,
  SET_BALANCER_PRICE,
 
} from "../types";
import {
  formatNumber,
  transformToMs,
  getDateArray,
  formUniswapDailyData,
  formBalancerDailyData,
  getVolume,
} from "../../utils";
import { traidingPair, tradeId } from "../../constants";

const ORBSState = (props) => {
  const initialState = {
    isLoading: false,
    linkId: 0,
    poolData: {},
    balancerPrice: null,
    uniswapPrice: null,
    dailyData: [],
    dateDiapason: {},
    chartData: [],
    switchPosition: "Liquidity",
    exchangeData: [],
    priceData: {},
    list: [
      { title: "Volume (24h)", info: null },
      { title: "Liquidity (now)", info: null },
      { title: "ROI (30 days)", info: null },
      { title: "Swap fee", info: null },
      { title: "Swaps", info: null },
      { title: "Fee returns (i)", info: null },
    ],
  };

  const [state, dispatch] = useReducer(OrbsReducer, initialState);

  const setDataPool = async (data, activeLink, uniData) => {
 
    let stateData =
      activeLink === 0 ? data.pools[0] : activeLink === 1 ? data : "";
      dispatch({ type: SET_POOL_DATA, payload: stateData });

    let chartData =
      activeLink === 0 ? data.swaps : activeLink === 1 ? data.pairDayDatas : "";

   
    await setListData(stateData, activeLink);
    setChartData(chartData, activeLink);
    if (activeLink === 0) {
      dispatch({ type: SET_BALANCER_PRICE, payload: data.tokenPrice.price });
    }

    
    dispatch({ type: SET_UNISWAP_PRICE, payload: uniData.pair.token0Price });

  
  };

  const setDailyData = (payload) => {
    dispatch({ type: SET_DAILY_DATA, payload });
  };

  const setSwitch = (payload) => {
    dispatch({ type: SET_SWITCH_POSITION, payload });
  };

  const setLinkId = (id) => {
    dispatch({ type: SET_ACTIVE_LINK_ID, payload: id });
  };

  const setTime = () => {
    const tomorrow = moment().add(1, "day").toDate();
    // const tomorrow = new Date(Date.now() + 1000 * 60 * 60 * 24);
    const twoWeekAgo = new Date(tomorrow - 12096e5);
    const twoMonthAgo = new Date(new Date().setDate(tomorrow.getDate() - 60));

    dispatch({
      type: SET_DATE_DIAPASON,
      payload: {
        tomorrow: transformToMs(Date.parse(tomorrow)),
        twoWeekAgo: transformToMs(Date.parse(twoWeekAgo)),
        twoMonthAgo: transformToMs(Date.parse(twoMonthAgo)),
      },
    });
  };

  const setUniswapData = (data, stateData) => {
   
    let obj = {
      pair: "ETH-ORBS",
      exchange: "UNISWAP",
      type: "DEX",
      price: (data * state.priceData.ETH).toFixed(4),
    };
  
    return obj;
  };

  const setBalancerData = (data, stateData) => {
  
    let obj = {
      pair: "ORBS-USDC",
      exchange: "BALANCER",
      type: "DEX",
      price: (data * state.priceData.USDC).toFixed(4),
    };
   
    return obj;
  };

  const setChartData = (data) => {
    let resultData, volume;

    if (state.linkId === 1) {
      resultData = formUniswapDailyData(data);
    } else {
      resultData = formBalancerDailyData(data);
      volume = getVolume(resultData);
      volume = volume > 0 ? "$" + volume : "-";

      dispatch({ type: SET_VOLUME_TO_LIST, volume });
    }
    dispatch({ type: SET_CHART_DATA, payload: resultData });
   
  };

  const setExchangeData = (
    priceData,
    balancerPrice,
    uniswapPrice,
    exchangeData
  ) => {
    const balancerObj = setBalancerData(balancerPrice, priceData);
    const uniswapObj = setUniswapData(uniswapPrice, priceData);

    exchangeData.unshift(balancerObj, uniswapObj);

    dispatch({ type: SET_EXCHANGE_DATA, payload: exchangeData });
  };

  const getPriceData = async () => {
    let dataPrice = {};
    for (let key in tradeId) {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${tradeId[key]}&vs_currencies=USD`
      );

      dataPrice[key] = data[tradeId[key]].usd;
   
      dispatch({ type: SET_PRICE_DATA, dataPrice });
    }
   
  };

  const getCoingeckoData = async (exchangeData) => {
    if (exchangeData.length < 9) {
      getPriceData();
      const {
        data: { tickers },
      } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/orbs/tickers`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
           
          },
        }
      );
      

      let resGecko = tickers.map((item) => {
        let obj = {
          pair: `${item.base}-${item.target}`,
          exchange: item.market.name,
          type: "CEX",
          price: item.converted_last.usd.toFixed(4),
        };
        return obj;
      });
      resGecko = resGecko.splice(0, 7);
    

      dispatch({ type: SET_EXCHANGE_DATA, payload: resGecko });
    }
  };

  const setListData = async (poolData, activeLink) => {
    
    const { data } = await axios.get(
      `https://data-api.defipulse.com/api/v1/blocklytics/pools/v1/exchange/${traidingPair[activeLink].id}?api-key=c2178db5f9163feb9748a78856e322874aca293813e4855179e29309d94e`
    );
    
    let volume = "",
      liquidity,
      roi = "",
      swapfee,
      swaps,
      feeReturns,
      resList;
    roi = !!data.roi ? `${Math.round(data.roi)}%` : "-";
    if (activeLink === 0) {
      swaps = poolData.swapsCount;
      liquidity = "$" + formatNumber(poolData.liquidity);
      swapfee = `${poolData.swapFee * 100}%`;
      feeReturns = formatNumber(poolData.totalSwapVolume * poolData.swapFee);
    } else if (activeLink === 1) {
      swaps = poolData.swaps.length;
      volume = poolData.pair.volumeUSD;
      feeReturns = +volume * 0.003;
      swapfee = "0.3%";
      liquidity = formatNumber(
        +poolData.pair.reserve0 * +poolData.pair.token0Price +
          +poolData.pair.reserve1 * +poolData.pair.token1Price
      );
    }

    resList = state.list.map((item) => {
      switch (item.title) {
        case "Volume (24h)":
          item.info = volume;
          break;
        case "Liquidity (now)":
          item.info = liquidity;
          break;
        case "ROI (30 days)":
          item.info = roi;
          break;
        case "Swap fee":
          item.info = swapfee;
          break;
        case "Swaps":
          item.info = swaps;
          break;
        case "Fee returns (i)":
          item.info = feeReturns;
          break;
        default:
          break;
      }
      return item;
    });

    dispatch({ type: SET_LIST_DATA, payload: resList });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ORBSContext.Provider
      value={{
        poolData: state.poolData,
        isLoading: state.isLoading,
        linkId: state.linkId,
        list: state.list,
        dateDiapason: state.dateDiapason,
        chartData: state.chartData,
        switchPosition: state.switchPosition,
        exchangeData: state.exchangeData,
        balancerPrice: state.balancerPrice,
        uniswapPrice: state.uniswapPrice,
        dataPrice: state.dataPrice,
        setLinkId,
        setDataPool,
        setLoading,
        setDailyData,
        setTime,
        setSwitch,
        getCoingeckoData,
        setExchangeData,
      }}
    >
      {props.children}
    </ORBSContext.Provider>
  );
};

export default ORBSState;
