import React, { Fragment } from "react";

import classes from "./TableRow.module.scss";

const TableRow = ({ trading, exchange, type, price }) => {
  return (
    <div className={classes.table_wrapper}>
      <span
        className={classes.table_info + " " + classes.table_infoTrade}
        style={{ minWidth: "110px" }}
      >
        {trading}
      </span>
      <div className={classes.table_infoContainer}>
        <span className={classes.table_info}>{exchange}</span>
        <span className={classes.table_info}>{type}</span>
      </div>
      <span className={classes.table_info}>{price}</span>
    </div>
  );
};

export default TableRow;
