import React, { useState } from "react";
import classes from "./Social.module.scss";

import { headerSocials } from "../../../constants";

export default ({ data, isFooter = false }) => {
  const [isHover, setIsHover] = useState(null);
  
  return (
    <div
      className={classes.social_wrapper}
      style={{ paddingTop: `${isFooter ? "8px" : "auto"}` }}
    >
      {data.map(({ name, Icon, link }) => (
        <a
          href="#"
          key={name}
          onMouseEnter={() => setIsHover(name)}
          onMouseLeave={() => setIsHover(null)}
        >
          <Icon color="#fff" name={name} isHover={isHover} />
        </a>
      ))}
    </div>
  );
};
