import React, { useContext, useEffect } from "react";

import OrbsContext from "../../../context/orbsData/orbsContext";
import { tableHeader } from "../../../constants";
import { TableRow } from "./TableRow";

import classes from "./TablePrice.module.scss";

const TablePrice = () => {
  const orbsContext = useContext(OrbsContext);
  const {
    exchangeData,
    priceData,
    linkId,
    balancerPrice,
    uniswapPrice,
    setExchangeData,
  } = orbsContext;

  useEffect(() => {
    if (
      exchangeData.length !== 9 &&
      priceData &&
      Object.keys(priceData).length === 2 &&
      balancerPrice !== null &&
      uniswapPrice !== null
    ) {
      setExchangeData(priceData, balancerPrice, uniswapPrice, exchangeData);
    }
  }, [balancerPrice, uniswapPrice, linkId, priceData, exchangeData]);

  const tableTitle = tableHeader.map(({ trading, exchange, type, price }) => (
    <TableRow
      key={`${price}_${trading}`}
      trading={trading}
      exchange={exchange}
      type={type}
      price={price}
      className={classes.table_header}
    />
  ));

  const tableContant = exchangeData.map(
    ({ pair, exchange, type, price, url }) => {
      
      let rand = Math.floor(Math.random() * 1000) + 1;
      return (
        <TableRow
          key={`${exchange}_${pair}_${rand}`}
          trading={pair}
          exchange={exchange}
          type={type}
          price={price}
          isField={true}
          url={url}
        />
      );
    }
  );

  return (
    <div className={classes.table_wrapper}>
      <span className={classes.table_title}>Cross-exchange comparison</span>
      {tableTitle}
      {tableContant}
    </div>
  );
};

export default TablePrice;
