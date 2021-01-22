import React from "react";
import classes from "./Button.module.scss";

const Button = ({ className = "", title = "", onClick }) => {
  return (
    <div className={classes.button_basic + " " + className} onClick={onClick}>
      {title}
    </div>
  );
};

export default Button;
