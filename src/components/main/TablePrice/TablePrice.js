import React, { Fragment } from "react";

import { exchangeList, tableHeader } from "../../../constants";
import { TableRow } from "./TableRow";

import classes from "./TablePrice.module.scss";

const TablePrice = () => {
  const tableTitle = tableHeader.map(({ trading, exchange, type, price }) => (
    <TableRow
      key={`${price}_${trading}`}
      trading={trading}
      exchange={exchange}
      type={type}
      price={price}
    />
  ));

  const tableContant = exchangeList.map(({ trading, exchange, type, price }) => (
    <TableRow
      key={`${price}_${trading}`}
      trading={trading}
      exchange={exchange}
      type={type}
      price={price}
    />
  ));
  return (
    <div className={classes.table_wrapper}>
      <span className={classes.table_title}>Cross-exchange comparison</span>
      {tableTitle}
      {tableContant}
    </div>
  );
};

export default TablePrice;
