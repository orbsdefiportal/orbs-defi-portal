import React, { useReducer } from "react";
import axios from "axios";
import moment from "moment";

import ORBSContext from "./orbsContext";
import OrbsReducer from "./orbsReducer";
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
import {
  formatNumber,
  transformToMs,
  getDateArray,
  formUniswapDailyData,
  formBalancerDailyData,
  formBalancerChartData,
  getVolume,
} from "../../utils";
import classes from "../../components/main/List/ListItem/ListItem.module.scss";
import { traidingPair, tradeId } from "../../constants";

const ORBSState = (props) => {
  const tag = (
    <span className={classes.listItem_tooltip}>
      (i)
      <span className={classes.listItem_right}>
        USD equivalent collected by liquidity providers in this pool
        <i></i>
      </span>
    </span>
  );

  const initialState = {
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
    isError: false,
    linkId: 0,
    poolData: {},
    balancerPrice: null,
    uniswapPrice: null,
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
      {
        title: <span>Fee returns {tag}</span>,
        info: null,
      },
    ],
  };

  const [state, dispatch] = useReducer(OrbsReducer, initialState);

  const setDataPool = async (data, activeLink, uniData) => {
    let stateData =
      activeLink === 0 ? data.pools[0] : activeLink === 1 ? data : "";
    dispatch({ type: SET_POOL_DATA, payload: stateData });

    let chartData =
      activeLink === 0
        ? data.pools[0].swaps //data.swaps
        : activeLink === 1
        ? data.pairDayDatas
        : "";

    let totalSwapVolume = activeLink === 0 ? data.pools[0].totalSwapVolume : "";

    await setListData(stateData, activeLink);
    setChartData(chartData, activeLink, totalSwapVolume);
    if (activeLink === 0) {
      dispatch({ type: SET_BALANCER_PRICE, payload: data.tokenPrice.price });
    }

    dispatch({ type: SET_UNISWAP_PRICE, payload: uniData.pair.token0Price });
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

  const skipStatus = () => {
    dispatch({ type: SKIP_STATUS });
  };

  const subscribe = async (email) => {
    const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
    const URL = "https://blog.orbsdefi.com/api/v1/free";
    try {
      const response = await axios.post(
        `${PROXY_URL}${URL}`,
        { email },
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      dispatch({ type: SET_IS_SUCCESS, payload: true });
    } catch (err) {
      console.log("err", err);
      dispatch({
        type: SET_IS_ERROR,
        payload: { status: true, msg: err.response.data.errors[0].msg },
      });
    }
  };

  const setUniswapData = (data, priceData) => {
    let obj = {
      pair: "ETH-ORBS",
      exchange: "UNISWAP",
      type: "DEX",
      price: (
        data *
        (state.priceData.ETH !== undefined
          ? state.priceData.ETH
          : priceData.ETH)
      ).toFixed(4),
      url: `https://info.uniswap.org/pair/0xc98b3b8c7cc0d7d925d1a407347b845d9f001391`,
    };

    return obj;
  };

  const setBalancerData = (data, priceData) => {
    let obj = {
      pair: "ORBS-USDC",
      exchange: "BALANCER",
      type: "DEX",
      price: (
        data *
        (state.priceData && state.priceData.USDC !== undefined
          ? state.priceData.USDC
          : priceData.USDC)
      ).toFixed(4),
      url: `https://pools.balancer.exchange/#/pool/0x795dfdfd413c4a9492cef5b58723f9fb3c8af624/`,
    };

    return obj;
  };

  const setChartData = (data, activeLink, totalSwapVolume) => {
    let resultData, volume;

    if (state.linkId === 1) {
      resultData = formUniswapDailyData(data);
    } else {
      resultData = formBalancerChartData(data, totalSwapVolume);
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
    await getPriceData();
    const {
      data: { tickers },
    } = await axios.get(`https://api.coingecko.com/api/v3/coins/orbs/tickers`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    let resGecko = tickers.map((item) => {
      let obj = {
        pair: `${item.base}-${item.target}`,
        exchange: item.market.name,
        type: "CEX",
        price: item.converted_last.usd.toFixed(4),
        url: item.trade_url,
      };
      return obj;
    });
    resGecko = resGecko.splice(0, 7);

    dispatch({ type: SET_EXCHANGE_DATA, payload: resGecko });
    // }
  };

  const setListData = async (poolData, activeLink) => {
    let key = activeLink === 0 ? "second" : "first";

    const { data } = await axios.get(
      `http://165.227.76.70:8080/api/blocklytics/Vyhzc3eU65qwI124Pkfd95b0msQ?key=${key}`
    );

    const { data: coin } = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=USD`
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
      liquidity =
        "$" + Math.round(+poolData.pair.reserveETH * coin.ethereum.usd);
    }

    resList = state.list.map((item, index) => {
      switch (item.title) {
        case "Volume (24h)":
          item.info = "$" + volume;
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

        default:
          break;
      }
      if (index === state.list.length - 1) {
        item.info = feeReturns;
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
        isSuccess: state.isSuccess,
        isError: state.isError,
        errorMessage: state.errorMessage,
        dateDiapason: state.dateDiapason,
        chartData: state.chartData,
        switchPosition: state.switchPosition,
        exchangeData: state.exchangeData,
        balancerPrice: state.balancerPrice,
        uniswapPrice: state.uniswapPrice,
        dataPrice: state.dataPrice,
        priceData: state.priceData,
        setLinkId,
        setDataPool,
        setLoading,
        setTime,
        setSwitch,
        getCoingeckoData,
        setExchangeData,
        subscribe,
        skipStatus,
      }}
    >
      {props.children}
    </ORBSContext.Provider>
  );
};

export default ORBSState;
