import React, { Fragment, useState } from "react";

import { Button } from "../../common/Button";

import classes from "./MainHeader.module.scss";

const MainHeader = () => {
  const [activeId, setActiveId] = useState(1);

  const setActiveLink = (id) => {
    setActiveId(id);
  };

  const openIframe = () => {
    let win = window.open();
    // let iframe = document.createElement("iframe");
    // iframe.src = `https://app.uniswap.org/#/swap?use=v1?outputCurrency=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359`;
    // iframe.frameBorder = "0";
    // iframe.id = "iframe";
    // iframe.style.position = "absolute";
    // iframe.style.zIndex = "999";
    // iframe.style.height = "100%";
    // iframe.style.width = "100%";
    // iframe.style.top = "0";
    // document.body.prepend(iframe);
    // document.body.style.overflow = "hidden";
    win.document.write(`<iframe
    src="https://app.uniswap.org/#/swap?use=v1?outputCurrency=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359&inputCurrency=0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa"
    height="100%"
    width="100%"
    style="
      border: 0;
      margin: 0 auto;
      display: block;
      border-radius: 10px;
      
    "
    id="myId"
  />`);
  };

  return (
    <div className={classes.mainHeader_wrapper}>
      <ul className={classes.mainHeader_menu}>
        <li
          // className={classes.mainHeader_item}
          className={`${classes.mainHeader_item} ${
            activeId === 1 ? `${classes.mainHeader_item_active}` : ""
          }`}
          onClick={() => setActiveLink(1)}
        >
          USDC/ORBS
        </li>
        <li
          className={`${classes.mainHeader_item} ${
            activeId === 2 ? `${classes.mainHeader_item_active}` : ""
          }`}
          onClick={() => setActiveLink(2)}
        >
          ETH/ORBS
        </li>
        <li
          className={`${classes.mainHeader_item} ${
            activeId === 3 ? `${classes.mainHeader_item_active}` : ""
          }`}
          onClick={() => setActiveLink(3)}
        >
          USDT/ORBS
        </li>
      </ul>
      <div className={classes.mainHeader_buttonContainer}>
        <a></a>
        <Button
          className={classes.mainHeader_styledButton}
          title="SWAP"
          onClick={openIframe}
        />
        <Button
          className={classes.mainHeader_basicButton}
          title="Add liquidity"
        />
      </div>
    </div>
  );
};

export default MainHeader;
