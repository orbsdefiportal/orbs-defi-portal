import React, { Fragment } from "react";

import { list } from "../../../constants";
import { ListItem } from "./ListItem";

import classes from "./List.module.scss";

const List = () => {
  return (
    <div className={classes.list_wrapper}>
      {list.map(({ title, info }) => (
        <ListItem key={`${title}_${info}`} title={title} info={info} />
      ))}
    </div>
  );
};

export default List;
