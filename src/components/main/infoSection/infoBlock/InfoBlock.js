import React, { Fragment } from "react";

import angleDown from '../../../../assets/icons/angle-down-link.svg'
import classes from "./InfoBlock.module.scss";

const InfoBlock = ({ title, content, link, linkName }) => {
  return (
    <div className={classes.infoBlock_wrapper}>
      <span className={classes.infoBlock_title}>{title}</span>
      <div className={classes.infoBlock_content}>{content}</div>
      <a className={classes.infoBlock_link} href={link}>{linkName} <img className={classes.infoBlock_img} src={angleDown}/></a>
    </div>
  );
};

export default InfoBlock;
