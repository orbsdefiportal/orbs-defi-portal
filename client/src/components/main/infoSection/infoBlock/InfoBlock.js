import React from "react";

import { sectionInfoContent } from "../../../../constants";
import angleDown from "../../../../assets/icons/angle-down-link.svg";
import classes from "./InfoBlock.module.scss";

const InfoBlock = ({ title, content, link, linkName, setCurrentId, id }) => {
  return (
    <div className={classes.infoBlock_wrapper}>
      <span className={classes.infoBlock_title}>{title}</span>

      <div className={classes.infoBlock_content}>{content}</div>
      <div className={classes.infoBlock_link} onClick={setCurrentId}>
        <div
          className={classes.infoBlock_dynamicLink}
          style={{ width: id === 0 && "100%" }}
        >
          {id === 0 ? (
            <a className={classes.infoBlock_link} href={link}>
              {linkName}
            </a>
          ) : (
            linkName
          )}
          <img className={classes.infoBlock_img} src={angleDown} />{" "}
        </div>
        {id !== 0 && (
          <div className={classes.infoBlock__articleName}>
            <a
              href={sectionInfoContent[id].Balancer}
              className={classes.infoBlock_option}
            >
              Balancer&#8194;{" "}
            </a>
            |
            <a
              href={sectionInfoContent[id].Uniswap}
              className={classes.infoBlock_option}
            >
              &#8194;Uniswap
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoBlock;
