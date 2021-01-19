import React from "react";

import { sectionInfoContent } from "../../../constants";
import { InfoBlock } from "./infoBlock";

import classes from "./infoSection.module.scss";

const InfoSection = () => {
  const infoBlocks = sectionInfoContent.map(
    ({ title, content, linkName, link, id }) => (
      <InfoBlock
        key={title}
        title={title}
        content={content}
        link={link}
        linkName={linkName}
        id={id}
      />
    )
  );

  return (
    <div className={classes.infoSection_wrapper}>
      <div className={classes.infoSection_container}>{infoBlocks}</div>
    </div>
  );
};

export default InfoSection;
