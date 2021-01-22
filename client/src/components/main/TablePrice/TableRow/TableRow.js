import React from "react";

import link from "../../../../assets/icons/link.svg";
import classes from "./TableRow.module.scss";

const TableRow = ({
  trading,
  exchange,
  type,
  price,
  className = "",
  url,
  isField = false,
}) => {
  return (
    <div className={classes.table_wrapper + " " + `${className}`}>
      <span
        className={classes.table_info + " " + classes.table_infoTrade}
        style={{ minWidth: "110px" }}
      >
        {trading}{" "}
        {isField && (
          <a href={url}>
            <img src={link} alt="link" />
          </a>
        )}
      </span>
      <div className={classes.table_infoContainer}>
        <span className={classes.table_info}>{exchange}</span>
        <span className={classes.table_info}>{type}</span>
      </div>
      <span className={classes.table_info + " " + classes.table_info_price}>
        {price}
      </span>
    </div>
  );
};

export default TableRow;
