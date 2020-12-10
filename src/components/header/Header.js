import React, { Fragment } from "react";

import { headerSocials } from "../../constants";
import { Logo } from "../common/Logo";
import { Menu } from "../common/Menu";
import { Socials } from "../common/Socials";
import { Button } from "../common/Button";

import classes from "./header.module.scss";

const Header = () => {
  return (
    <header className={classes.header_wrapper}>
      <Logo />
      <Menu />
      <div className={classes.header_container}>
        <Socials data={headerSocials} />
        <a className={classes.header_link} href="#">
          + SUBSCRIBE FOR UPDATES
        </a>
      </div>
    </header>
  );
};

export default Header;
