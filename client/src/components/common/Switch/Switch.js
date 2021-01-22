import React, { useContext } from "react";

import { Button } from "../Button";
import OrbsContext from "../../../contex/orbsData/orbsContext";
import classes from "./Switch.module.scss";

const Switch = () => {
  const orbsContext = useContext(OrbsContext);
  const { switchPosition, setSwitch } = orbsContext;

  const setActiveButton = (name) => {
    setSwitch(name);
  };

  return (
    <div className={classes.switch_wrapper}>
      <Button
        className={`${classes.switch_button} ${
          switchPosition === "Liquidity"
            ? `${classes.switch_button_active}`
            : `${classes.switch_button_basic}`
        }`}
        title="Liquidity"
        onClick={() => setActiveButton("Liquidity")}
      />
      <Button
        className={`${classes.switch_button} ${classes.switch_button_second} ${
          switchPosition === "Volume"
            ? `${classes.switch_button_active}`
            : `${classes.switch_button_basic}`
        }`}
        title="Volume"
        onClick={() => setActiveButton("Volume")}
      />
    </div>
  );
};

export default Switch;
