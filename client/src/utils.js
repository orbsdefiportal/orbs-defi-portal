import moment from "moment";
import "./App.css";

import { menuAddressLinks } from "./constants";

export const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  } else {
    if (!!num) return num.toFixed(1);
  }

  return num;
};

export const formListData = (list) => {};

export const transformToMs = (date) => {
  date = date.toString().slice(0, -3);
  return parseInt(date);
};

export const getDateArray = (date, isTransform = false) => {
  if (!isTransform) {
    date = date + "000";
  }

  date = new Date(+date);
  return date.toString().split(" ");
};

export const createIframe = (linkId, type, url) => {
  let articleLink = menuAddressLinks[linkId][`link${type}`];
  let linkTo = menuAddressLinks[linkId][type];
  let articleName = menuAddressLinks[linkId][`${type}Name`];
  let windowTitle = type === "swap" ? "Swap" : "Add liquidity";

  let win = window.open(
    `${url}`,
    `
  <html>
  <head>
  <title>${windowTitle}</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
  </head>
  <body style="margin: 0;">
  <a href=${articleLink} style="text-decoration: none; font-family: Montserrat; font-size: 12px; color: #6dbbcc; padding: 10px; display: flex; justify-content: center; text-transform: uppercase; background-color: #1a1a1a; background-image: url(/static/media/right_assets.5297a280.svg), url(/static/media/right_assets.5297a280.svg); background-repeat: no-repeat; background-position: 129% 50%, -40% 33%;">${articleName}</a>
  <iframe
  src=${linkTo}
  height="100%"
  width="100%"
  style="border: none"
  title="New"
  id="theiframe"
/>

</body>
</html>`
  );
  win.top.location.href = `${url}`;
};

export const formBalancerChartData = (data, totalSwapVolume) => {
  let volume = "",
    liquidity;
  data.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });

  data.map((item) => {
    let dateArr = getDateArray(item.timestamp);
    item.day = dateArr[2];
    item.month = dateArr[1];
    return item;
  });

  const resOb = data.sort((a, b) => a.timestamp - b.timestamp);

  let resultArray = new Array(14).fill(0);

  let currentIndex = 0;
  resultArray = resultArray.map((item, index) => {
    let date = moment().subtract(index, "day").toDate();
    let todayArr = getDateArray(Date.parse(date), true);

    let findIndex = data.findIndex(
      (item) => item.day === todayArr[2] && item.month === todayArr[1]
    );

    let findVolumeIndex = resOb.findIndex(
      (item) => item.day === todayArr[2] && item.month === todayArr[1]
    );

    if (findIndex !== -1 && findVolumeIndex !== -1) {
      volume = totalSwapVolume - +resOb[findVolumeIndex].poolTotalSwapVolume;
      liquidity = +data[findIndex].poolLiquidity;
      currentIndex = findIndex;
    } else {
      volume = 0;
      if (index === 0) {
        liquidity = +data[data.length - 1].poolLiquidity;
      } else {
        liquidity = +data[currentIndex - 1].poolLiquidity;
      }
    }

    let obj = {
      day: parseInt(todayArr[2], 10),
      month: todayArr[1],
      year: todayArr[3],
      liquidity: liquidity,
      volume: volume,
    };

    return obj;
  });

  return resultArray.reverse();
};

export const formUniswapDailyData = (data) => {
  let volume = "",
    liquidity;

  data.map((item) => {
    let dateArr = getDateArray(item.date);
    item.day = dateArr[2];
    item.month = dateArr[1];
    return item;
  });
  let resultArray = new Array(14).fill(0);

  let currentIndex = data.length - 1;
  resultArray = resultArray.map((item, index) => {
    let date = moment().subtract(index, "day").toDate();
    let todayArr = getDateArray(Date.parse(date), true);
    let findIndex = data.findIndex(
      (item) => item.day === todayArr[2] && item.month === todayArr[1]
    );
    if (findIndex !== -1) {
      volume = +data[findIndex].dailyVolumeUSD;
      liquidity = +data[findIndex].reserveUSD;
      currentIndex = findIndex;
    } else {
      volume = 0;
      liquidity = +data[currentIndex - 1].reserveUSD;
    }

    let obj = {
      day: parseInt(todayArr[2], 10),
      month: todayArr[1],
      year: todayArr[3],
      liquidity: liquidity,
      volume: volume,
    };

    return obj;
  });

  return resultArray.reverse();
};

export const getVolume = (data) => {
  return formatNumber(
    data[data.length - 1].volume - data[data.length - 2].volume
  );
};

export const formBalancerDailyData = (data) => {
  data = data.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });

  let formatData = data.reduce((res, item, index) => {
    let arr = getDateArray(item.timestamp);

    let obj = {
      day: parseInt(arr[2], 10),
      month: arr[1],
      year: arr[3],
      liquidity: +item.poolLiquidity,
      volume: +item.poolTotalSwapVolume,
    };
    if (index === 0) {
      res.push(obj);
    } else {
      let day = res.findIndex((e) => e.day === obj.day);
      if (day === -1) {
        res.push(obj);
      }
    }

    return res;
  }, []);

  formatData.reverse();

  return formatData;
};
