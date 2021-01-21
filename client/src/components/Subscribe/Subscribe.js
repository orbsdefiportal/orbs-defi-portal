import React from "react";

import bell from "../../assets/icons/small_bell.svg";
import { FormContainer } from "./formContainer";
import classes from "./Subscribe.module.scss";

const Subscribe = ({ title, content, link, linkName }) => {
  return (
    <div className={classes.subscribe_wrapper}>
      <img src={bell} />
      <FormContainer />
    </div>
  );
};

export default Subscribe;
