import React from "react";

import classes from "./ListItem.module.scss";

const ListItem = ({ title, info }) => {
  return (
    <div className={classes.listItem_container}>
      <span>{title}</span>
      <span>{info}</span>
    </div>
  );
};

export default ListItem;
