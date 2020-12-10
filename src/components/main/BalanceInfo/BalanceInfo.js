import React, { Fragment } from "react";

import link from "../../../assets/icons/link.svg";
import { Dollar, Ball } from "../../../assets/components";

import classes from "./BalanceInfo.module.scss";

const BalanceInfo = () => {
  return (
    <div className={classes.balancer_wrapper}>
      <div className={classes.balancer_data}>
        {" "}
        90% / 10%
        <a href="#">
          <img src={link} style={{ margin: "8px 0 0 8px" }} />
        </a>
      </div>
      <span className={classes.balancer_tab}>USDS/ORBS</span>
      <span className={classes.balancer_title}>Balancer Pool</span>
      <div className={classes.balancer_imageContainer}>
        <div className={classes.balancer_imageItem + " " + classes.balancer_imageItem_first}>
          <div className={classes.balancer_ball}>
            <Ball color="#6dbbcc" className={classes.balancer_ball} />
          </div>
        </div>
        <div
          className={
            classes.balancer_imageItem + " " + classes.balancer_imageItem_second
          }
        >
          <div className={classes.balancer_imageSVG}> <Dollar color="#fff" /> </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceInfo;
