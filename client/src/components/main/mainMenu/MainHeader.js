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
        <a></a>
        <Button
          className={classes.mainHeader_styledButton}
          title="SWAP"
          onClick={() => createIframe(linkId, "swap")}
        />
        <Button
          className={classes.mainHeader_basicButton}
          title="Add liquidity"
          onClick={() => createIframe(linkId, "liquidity")}
        />
      </div>
    </div>
  );
};

export default MainHeader;
