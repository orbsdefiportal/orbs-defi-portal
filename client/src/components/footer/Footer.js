import React from "react";

import { Menu } from "../common/Menu";
import { FooterLinks } from "./FooterLinks";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer_wrapper}>
      <article className={classes.footer_blockItem}>
        <h5>Not investment advice</h5>
        <p>
          The content of this website does not constitute investment advice,
          financial advice, trading advice, or any other advice. Blocklytics
          will strive to ensure accuracy of information listed on this website
          although it will not hold any responsibility for any missing or wrong
          information. Orbs DeFi Portal provides all information as is.
        </p>
      </article>
      <article className={classes.footer_blockItem}>
        <h5>Orbs De-fi Platform</h5>
        <p>
          Orbs DeFi Portal is a web application for using ORBS token in DeFi
          applications. The portal is integrated with{" "}
          <a href="https://info.uniswap.org/home">Uniswap </a> through TheGraph
          and <a href="https://pools.balancer.exchange/#/explore">Balancer</a>.{" "}
          <a href="https://data.defipulse.com/"> DeFi Pulse</a> provides
          analytical data. Cryptocurrency pricing data is provided by{" "}
          <a href="https://www.coingecko.com/">Coingecko</a>.
        </p>
      </article>

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
