import React from "react";
import classes from './Logo.module.scss'

import logo from "../../../assets/icons/logo.svg";

export default () => {
  return (
    <div className={classes.logo_wrapper}>
      <img className = {classes.logo_img} src={logo}></img>
      <span className={classes.logo_title}>orbs defi portal</span>
    </div>
  );
};


