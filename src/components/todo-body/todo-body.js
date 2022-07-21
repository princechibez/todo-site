import React, { useState } from "react";
import classes from "./todo-body.module.css";

import EachTodo from "../eachtodo/eachtodo";

import { connect } from "react-redux";
import * as actionTypes from "../../store/index";

const TodoBody = (props) => {
  let [taskInput, setTaskInput] = useState("");
  let formClasses;
  let taskSectionMode;

  if (props.displayMode) {
    formClasses = [classes.form_section, classes.form_section_lightMode];
    taskSectionMode = [classes.task_section, classes.task_section_lightMode];
  } else {
    formClasses = [classes.form_section, classes.form_section_darkMode];
    taskSectionMode = [classes.task_section, classes.task_section_darkMode];
  }

  const radioChecktoogler = () => {
    setText();
    setTaskInput("");
  };
  const inputChangedHandler = (event) => {
    setTaskInput(event.target.value);
  };
  const setText = async () => {
    props.registerTask(taskInput);
  };

  let tasksDisplayBody;
  if (props.tasks.length === 0) {
    let styles = {
      textAlign: "center",
      display: "flex",
      flexflow: "column",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.5em",
      fontWeight: "bolder",
      color: "hsl(234, 71%, 71%)",
      height: "100%",
    };
    tasksDisplayBody = (
      <div style={styles}>
        You don't have any tasks now. <br /> Start adding tasks
      </div>
    );
  } else {
    tasksDisplayBody = props.tasks.map((eachTask) => (
      <EachTodo displayMode={props.displayMode} text={eachTask} />
    ));
  }

  return (
    <main className={classes.todo_Body}>
      <div className={formClasses.join(" ")}>
        <button onClick={radioChecktoogler}>Add</button>
        <input
          type="text"
          value={taskInput}
          placeholder="Start typing..."
          onChange={(event) => inputChangedHandler(event)}
        />
      </div>
      <div className={taskSectionMode.join(" ")}>
        <div className={classes.task_list}>{tasksDisplayBody}</div>
        <div className={classes.task_controllers}>
          <p>Blabla</p>
          <p>Blabla</p>
          <p>Blabla</p>
        </div>
      </div>
      <div className={classes.bottom_text}>
        <h4>Drag and drop to reorder list</h4>
      </div>
    </main>
  );
};

const mapStatetoProps = (state) => {
  return {
    displayMode: state.uiReducer.displayMode,
    tasks: state.taskReducer.tasks,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    registerTask: (taskInput) => dispatch(actionTypes.registerTask(taskInput)),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(TodoBody);
