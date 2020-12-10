import React, { Fragment } from "react";

import { Socials } from "../common/Socials";
import { Menu } from "../common/Menu";
import { FooterLinks } from "./FooterLinks";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer_wrapper}>
      {/* <div className={classes.footer_blockContainer}> */}
      <article className={classes.footer_blockItem}>
        <h5>Not investment advice</h5>
        <p>
          The content of this website does not constitute investment advice,
          financial advice, trading advice, or any other advice. Blocklytics
          will strive to ensure accuracy of information listed on this website
          although it will not hold any responsibility for any missing or wrong
          information. Blocklytics provides all information as is.
        </p>
      </article>
      <article className={classes.footer_blockItem}>
        <h5>Orbs De-fi Platform</h5>
        <p>
          Orbs De-Fi Portal is a web application for interacting with{" "}
          <a href="#">Orbs </a> on <a href="#">Uniswap, Balancer</a> with
          cryptocurrency pricing data provided by <a href="#">Coingecko</a>
        </p>
      </article>
      {/* </div> */}
      <div className={classes.footer_menuContainer}>
        <span>Menu</span>
        <Menu className={classes.footer_menu} isFooter={true} />
      </div>
      <FooterLinks />

      <div></div>
    </div>
  );
};

export default Footer;
