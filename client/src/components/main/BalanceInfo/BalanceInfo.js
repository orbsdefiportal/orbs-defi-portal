import React, { useContext } from "react";

import link from "../../../assets/icons/link.svg";
import { Dollar, Ball } from "../../../assets/components";
import OrbsContext from "../../../context/orbsData/orbsContext";
import { traidingPair, menuAddressLinks } from "../../../constants";
import eth from "../../../assets/icons/eth.png";

import classes from "./BalanceInfo.module.scss";

const BalanceInfo = () => {
  let weight;
  const orbsContext = useContext(OrbsContext);
  const { poolData, linkId } = orbsContext;

  const { tokens } = poolData;

  if (!!tokens && linkId === 0) {
    weight = tokens.reduce((arr, token) => {
      arr.push(+token.denormWeight * 2);
      return arr;
    }, []);
    // liquidity = formatNumber(poolData.liquidity);
  } else if (linkId === 1) {
    weight = [50, 50];
  }

  return (
    <div className={classes.balancer_wrapper}>
      <div className={classes.balancer_data}>
        {weight && `${weight[0]}% / ${weight[1]}%`}
        <a href={menuAddressLinks[linkId].link}>
          <img src={link} style={{ margin: "8px 0 0 8px" }} alt="link" />
        </a>
      </div>
      <span className={classes.balancer_tab}>{traidingPair[linkId].pair}</span>
      <span className={classes.balancer_title}>
        {linkId === 0 ? "Balancer" : "Uniswap"} Pool
      </span>
      <div className={classes.balancer_imageContainer}>
        <div
          className={
            classes.balancer_imageItem + " " + classes.balancer_imageItem_first
          }
        >
          <div className={classes.balancer_ball}>
            <Ball color="#6dbbcc" className={classes.balancer_ball} />
          </div>
        </div>
        <div
          className={
            classes.balancer_imageItem + " " + classes.balancer_imageItem_second
          }
        >
          {" "}
          {linkId === 1 ? (
            <img
              src={eth}
              style={{ width: "57px", height: "57px" }}
              alt="pool"
            />
          ) : (
            <div className={classes.balancer_imageSVG}>
              {" "}
              <Dollar color="#fff" />{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BalanceInfo;
