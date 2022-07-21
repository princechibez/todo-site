import React, { useState } from "react";
import classes from "./eachtodo.module.css";

const EachTodo = (props) => {
  let [radioChecker, setRadioChecker] = useState(false);
  let body_container_classes;

  const radioChecktoogler = () => {
    setRadioChecker(!radioChecker);
    props.selector()
  };

  if (props.displayMode) {
    body_container_classes = [
      classes.bodyContainer,
      classes.bodyContainer_lightMode,
    ];
  } else {
    body_container_classes = [
      classes.bodyContainer,
      classes.bodyContainer_darkMode,
    ];
  }

  return (
    <div
      className={body_container_classes.join(" ")}
      onClick={radioChecktoogler}
    >
      {radioChecker ? (
        <span class="material-icons">check_circle</span>
      ) : (
        <span class="material-icons">radio_button_unchecked</span>
      )}
      <p>{props.text}</p>
    </div>
  );
};

export default EachTodo;
