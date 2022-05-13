import React from "react";

import classes from './ErrorMessage.module.css';

const ErrorMessage = (props) => {
  let isDisplayed = "";
  if (props.show) {
    isDisplayed = classes.show;
  }

  return (
    <label className={`${classes.errorMsg} ${isDisplayed}`}>
      {props.children}
    </label>
  );
};

export default ErrorMessage;
