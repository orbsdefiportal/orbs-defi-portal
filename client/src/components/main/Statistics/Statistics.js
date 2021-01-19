import React, { Fragment, useContext } from "react";

import { MainHeader } from "../mainMenu";
import { Switch } from "../../common/Switch";
import { BalanceInfo } from "../BalanceInfo";
import { List } from "../List";
import { BarChart } from "../../common/BarChart";
import Loader from "../../common/Loader/Loader";

import classes from "./Statistics.module.scss";

const Statistics = (loading) => {
  return (
    <div className={classes.statistics_wrapper}>
      <MainHeader />

      <Fragment>
        <Switch />
        <div className={classes.statistics_content}>
          <div className={classes.statistics_chart}>
            <BarChart />
          </div>
          <BalanceInfo />
        </div>
        <List />
      </Fragment>
    </div>
  );
};

export default Statistics;
