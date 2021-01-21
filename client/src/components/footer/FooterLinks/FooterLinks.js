import React, { Fragment } from "react";

import github from "../../../assets/icons/github-.svg";
import { footerSocials } from "../../../constants";
import { Socials } from "../../common/Socials";
import classes from "./FooterLinks.module.scss";

const FooterLinks = () => {
  return (
    <div className={classes.footerLinks_wrapper}>
      <div style={{ textAlign: "left" }}>
        <span className={classes.footerLinks_title}>Built by Paradigm </span>

        <div className={classes.footerLinks_credits}>
          <a
            href="https://github.com/orbsdefiportal"
            style={{ paddingLeft: "5px" }}
          >
            paradigmfund.io
          </a>
        </div>
        <span className={classes.footerLinks_title}>Open Source </span>
        <div
          className={classes.footerLinks_credits}
          style={{ paddingTop: "1px", paddingBottom: "1px" }}
        >
          <a href="https://github.com/orbsdefiportal">
            {" "}
            <img src={github} />
          </a>
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
