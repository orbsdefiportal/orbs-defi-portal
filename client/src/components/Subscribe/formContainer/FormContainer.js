import React, { useContext, useState, useEffect } from "react";

import { Button } from "../../common/Button";
import { formDescription } from "../../../constants";
import OrbsContext from "../../../contex/orbsData/orbsContext";

import classes from "./FormContainer.module.scss";

const FormContainer = ({}) => {
  const [email, setEmail] = useState("");
  const orbsContext = useContext(OrbsContext);
  const { subscribe, isSuccess, errorMessage, isError } = orbsContext;

  useEffect(() => {
    if (isSuccess) setEmail("");
  }, [isSuccess]);

  return (
    <div className={classes.form_root}>
      <span className={classes.form_title}>Subscribe to Orbs De-fi Portal</span>
      <span className={classes.form_description}>{formDescription}</span>
      <form
        className={classes.form_wrapper}
        onSubmit={(e) => e.preventDefault()}
      >
        <label className={classes.form_label} htmlFor="email">
          {errorMessage && errorMessage.length > 0 ? errorMessage : ""}
        </label>
        <input
          className={classes.form_input}
          type="text"
          id="email"
          placeholder="Email Address*"
          style={{
            border: `${
              isError
                ? "1px solid #d92e58"
                : "solid 1px rgba(109, 187, 204, 0.3)"
            }`,
          }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>

        <Button
          className={classes.form_basicButton}
          onClick={() => subscribe(email)}
          title="Subscribe now"
        />
      </form>
    </div>
  );
};

export default FormContainer;
