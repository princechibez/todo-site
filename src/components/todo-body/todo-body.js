import React, { useState } from "react";
import classes from "./todo-body.module.css";

import EachTodo from "../eachtodo/eachtodo";

import { connect } from "react-redux";
import * as actionTypes from "../../store/index";

const TodoBody = (props) => {
  let indexOfSelectedTasks = [];
  let [taskInput, setTaskInput] = useState("");
  let formClasses;
  let taskSectionMode;
  let todoFunctionClasses;

  if (props.displayMode) {
    formClasses = [classes.form_section, classes.form_section_lightMode];
    taskSectionMode = [classes.task_section, classes.task_section_lightMode];
    todoFunctionClasses = [classes.todo_functions_mobile]
  } else {
    todoFunctionClasses = [classes.todo_functions_mobile, classes.todo_functions_mobile_dark]
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

  const taskChecked = (taskIndex) => {
    indexOfSelectedTasks.forEach((ind, index) => {
      if (ind === taskIndex) {
        indexOfSelectedTasks.splice(index, 1)
        return console.log(indexOfSelectedTasks)
      }
    })
      // if (eachIndex === taskIndex) {
      //   indexOfSelectedTasks = indexOfSelectedTasks.filter(eachIndex => eachIndex !== taskIndex)
      //   console.log(indexOfSelectedTasks)
      // }
    indexOfSelectedTasks.push(taskIndex);
    console.log(indexOfSelectedTasks)
    // console.log(indexOfSelectedTasks)
  }

  let tasksDisplayBody;
  if (props.tasks.length === 0) {
    let styles = {
      textAlign: "center",
      display: "flex",
      flexflow: "column",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.2em",
      fontWeight: "bolder",
      color: "hsl(234, 71%, 71%)",
      height: "100%",
      padding: "10px"
    };
    tasksDisplayBody = (
      <div style={styles}>
        You don't have any tasks now. <br /> Start adding tasks
      </div>
    );
  } else {
    tasksDisplayBody = props.tasks.map((eachTask, index) => (
      <EachTodo selector={() => taskChecked(index)} key={index} displayMode={props.displayMode} text={eachTask} />
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
          <div>{props.tasks.length} items</div>
          <div className={[classes.todo_functions_desktop, classes.desktop].join(" ")}>
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
          </div>
          <div onClick={() => props.clearSelectedTasks(indexOfSelectedTasks)}>clear completed</div>
        </div>
      </div>
      <div className={todoFunctionClasses.join(" ")}>
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
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
    clearSelectedTasks: (taskIndices) => dispatch(actionTypes.selectedTasks(taskIndices))
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(TodoBody);
