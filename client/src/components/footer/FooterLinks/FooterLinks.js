import React, { Fragment } from "react";

import github from "../../../assets/icons/github-.svg";
import { footerSocials } from "../../../constants";
import { Socials } from "../../common/Socials";
import classes from "./FooterLinks.module.scss";

const FooterLinks = () => {
  return (
    <div className={classes.footerLinks_wrapper}>
      <div>
        <span className={classes.footerLinks_title}>Built by Paradigm </span>
        <div className={classes.footerLinks_credits}>
          <img src={github} />
          <a href="https://github.com/orbsdefiportal">paradigmfund.io</a>
        </div>
      </div>
      <div className={classes.footerLinks_socials}>
        <span className={classes.footerLinks_title}>Contact us </span>
        <Socials data={footerSocials} isFooter={true} />
      </div>
    </div>
  );
};

export default FooterLinks;
