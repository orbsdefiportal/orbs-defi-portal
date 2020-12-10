import React, { Fragment } from "react";

import { Button } from "../../common/Button";
import { formDescription } from "../../../constants";
import classes from "./FormContainer.module.scss";

const FormContainer = ({}) => {
  return (
    <div className={classes.form_root}>
      <span className={classes.form_title}>Subscribe to Orbs De-fi Portal</span>
      <span className={classes.form_description}>{formDescription}</span>
      <form className={classes.form_wrapper}>
        <input className={classes.form_input} type="text" placeholder="Email Address*"></input>
        <Button className={classes.form_basicButton} title="Subscribe now" />
      </form>
    </div>
  );
};

export default FormContainer;
