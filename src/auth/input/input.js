import React from "react";
import classes from "./input.module.css";

const input = (props) => {
  let inputEl = null;
  let inputClasses = [classes.InputEl];
  if (props.invalid && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  if (props.elementType === "input") {
    inputEl = (
      <input
        className={inputClasses.join(" ")}
        value={props.value}
        {...props.elementConfig}
        onChange={props.changed}
      />
    );
  }
  return <div className={classes.Input}>{inputEl}</div>;
};

export default input;
