import React, { Fragment } from "react";

import { sectionInfoContent } from "../../../constants";
import { InfoBlock } from "./infoBlock";

import classes from "./infoSection.module.scss";

const InfoSection = () => {
  const infoBlocks = sectionInfoContent.map(({ title, content, linkName, link }) => (
    <InfoBlock key={title} title={title} content={content} link={link} linkName={linkName} />
  ));

  return (
    <div className={classes.infoSection_wrapper}>
     {infoBlocks}
    </div>
  );
};

export default InfoSection;
