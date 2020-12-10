import React, { Fragment } from "react";

import { Statistics } from "./Statistics";
import { TablePrice } from "./TablePrice";
import { InfoSection } from "./infoSection";

import classes from "./Main.module.scss";

const Main = () => {
  return (
    <main className={classes.main_root}>
      <div className={classes.main_wrapper}>
        <Statistics />
        <TablePrice />
      </div>
      <InfoSection />
    </main>
  );
};

export default Main;
