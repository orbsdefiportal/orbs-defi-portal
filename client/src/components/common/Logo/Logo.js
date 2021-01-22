import React from "react";
import classes from "./Logo.module.scss";

import logo from "../../../assets/icons/logo.svg";

const Logo = () => {
  return (
    <div className={classes.logo_wrapper}>
      <img className={classes.logo_img} src={logo} alt="logo"></img>
      <span className={classes.logo_title}>orbs defi portal</span>
    </div>
  );
};

export default Logo;
