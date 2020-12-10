import React, { useState } from "react";

import { Button } from "../Button";

import classes from "./Switch.module.scss";

export default () => {
  const [isActive, setIsActive] = useState("Liquidity");
  const setActiveButton = (name) => {
    setIsActive(name);
  };
  return (
    <div className={classes.switch_wrapper}>
      <Button
        className={`${classes.switch_button} ${
          isActive === "Liquidity"
            ? `${classes.switch_button_active}`
            : `${classes.switch_button_basic}`
        }`}
        // className={classes.switch_main}
        title="Liquidity"
        onClick={() => setActiveButton("Liquidity")}
      />
      <Button
        className={`${classes.switch_button} ${classes.switch_button_second} ${
          isActive === "Volume"
            ? `${classes.switch_button_active}`
            : `${classes.switch_button_basic}`
        }`}
        // className={classes.switch_main + " " + classes.switch_main_active}
        title="Volume"
        onClick={() => setActiveButton("Volume")}
      />
    </div>
  );
};
