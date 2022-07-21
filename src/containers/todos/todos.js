import React from "react";
import classes from "./todos.module.css";

import * as actionTypes from "../../store/actions/uiActions";

import sunIcon from '../../Assets/images/icon-sun.svg';
import moonIcon from '../../Assets/images/icon-moon.svg';
import TodoBody from "../../components/todo-body/todo-body";

import { connect } from "react-redux/es/exports";
import { NavLink } from "react-router-dom";

const Todo = (props) => {
    let upper_section_mode;
    let lower_section_mode;
    if (props.displayMode) {
        upper_section_mode = [classes.upper_section, classes.upper_section_lightMode]
        lower_section_mode = [classes.lower_section, classes.lower_section_lightMode]
    } else {
        upper_section_mode = [classes.upper_section, classes.upper_section_darkMode];
        lower_section_mode = [classes.lower_section, classes.lower_section_darkMode]
    }
    return (
        <main className={classes.todo_body}>
            <section className={upper_section_mode.join(" ")}>
                <div className={classes.cover}>
                <div className={classes.text}>
                <h1 title="go back to home"><NavLink to="/">TODO</NavLink></h1>
                </div>
                <div title="Toogle Light/Dark mode" className={classes.mode_icon}>
                    <img src={props.displayMode ? moonIcon : sunIcon} onClick={() => props.toogleMode()} />
                </div>
                </div>
            </section>
            <section className={lower_section_mode.join(" ")}>
                <TodoBody />
            </section>
        </main>
    );
}

const mapStatetoProps = state => {
    return {
        displayMode: state.uiReducer.displayMode
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        toogleMode: () => dispatch({ type: actionTypes.MODE_CHANGER })
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Todo);