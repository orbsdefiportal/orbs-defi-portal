import React, { useContext } from "react";

import { ListItem } from "./ListItem";
import OrbsContext from "../../../context/orbsData/orbsContext";
import classes from "./List.module.scss";

const List = () => {
  const orbsContext = useContext(OrbsContext);
  const { list } = orbsContext;

  return (
    <div className={classes.list_wrapper}>
      {list.map(({ title, info }) => (
        <ListItem key={`${title}_${info}`} title={title} info={info} />
      ))}
    </div>
  );
};

export default List;
