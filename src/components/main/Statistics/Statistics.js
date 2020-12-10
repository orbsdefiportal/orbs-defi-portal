import React, { Fragment } from "react";

import { MainHeader } from "../mainMenu";
import { Switch } from "../../common/Switch";
import { BalanceInfo } from "../BalanceInfo";
import { List } from "../List";
import { BarChart } from "../../common/BarChart";

import classes from "./Statistics.module.scss";

const Statistics = () => {
  return (
    <div className={classes.statistics_wrapper}>
      <MainHeader />
      <Switch />
      <div className={classes.statistics_content}>
        <div className={classes.statistics_chart}>
          <BarChart />
        </div>
        <BalanceInfo />
      </div>
      <List />
    </div>
  );
};

export default Statistics;
