import React, { useContext } from "react";

import { Button } from "../../common/Button";
import classes from "./MainHeader.module.scss";
import OrbsContext from "../../../contex/orbsData/orbsContext";
import { createIframe } from "../../../utils";

const MainHeader = () => {
  const orbsContext = useContext(OrbsContext);
  const { linkId, setLinkId, setLoading } = orbsContext;

  const setActiveLink = (id) => {
    setLinkId(id);
    setLoading();
  };

  const handleOnClick = (type) => {
    let url =
      type === "swap" && linkId === 0
        ? "/balswapusdcorbs"
        : type === "swap" && linkId === 1
        ? "/uniswapethorbs"
        : type === "liquidity" && linkId === 0
        ? "/baladdusdcorbs"
        : "/uniaddethorbs";

    createIframe(linkId, type, url);
  };

  return (
    <div className={classes.mainHeader_wrapper}>
      <ul className={classes.mainHeader_menu}>
        <li
          className={`${classes.mainHeader_item} ${
            linkId === 0 ? `${classes.mainHeader_item_active}` : ""
          }`}
          onClick={() => setActiveLink(0)}
        >
          USDC/ORBS
        </li>
        <li
          className={`${classes.mainHeader_item} ${
            linkId === 1 ? `${classes.mainHeader_item_active}` : ""
          }`}
          onClick={() => setActiveLink(1)}
        >
          ETH/ORBS
        </li>
      </ul>
      <div className={classes.mainHeader_buttonContainer}>
        {/* <a></a> */}

        <Button
          className={classes.mainHeader_styledButton}
          title="swap"
          linkId={linkId}
          onClick={() => handleOnClick("swap")}
        />
        <Button
          className={classes.mainHeader_basicButton}
          title="Add liquidity"
          onClick={() => handleOnClick("liquidity")}
        />
      </div>
    </div>
  );
};

export default MainHeader;
