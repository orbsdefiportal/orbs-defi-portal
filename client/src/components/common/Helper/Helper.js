import React, { useState } from "react";

import classes from "./Helper.module.scss";
import close from "../../../assets/icons/close.svg";

const Helper = () => {
  const [isClose, setIsClose] = useState(false);
  return (
    <div
      className={classes.helper_wrapper}
      style={{ display: `${isClose ? "none" : ""}` }}
    >
      <div className={classes.helper_rightContainer}></div>
      <div className={classes.helper_content}>
        Need help?{" "}
        <a href="https://orbsdefi.substack.com/p/how-to-add-liquidity-to-balancer">
          how-to-add liquidity on Balancer" guide
        </a>
      </div>
      <div className={classes.helper_leftContainer}>
        <img
          className={classes.helper_close}
          onClick={() => setIsClose(true)}
          src={close}
          alt="close"
        />
      </div>
    </div>
  );
};

export default Helper;
