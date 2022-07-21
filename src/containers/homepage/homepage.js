import React, { Component } from "react";

import Aux from "../../hoc/auxi/auxi";
import classes from "./homepage.module.css";
import logo_img from '../../Assets/vecteezy_note-book-hand-phone-with-pencil-cartoon-vector-icon_6096482.jpg';
import col_left_img from '../../Assets/phonebook icon 3.png';

import { NavLink, Outlet } from "react-router-dom";


class HomePage extends Component {
  render() {
    return (
      <Aux>
        <main className={classes.main_board}>
          <section className={classes.inside_main_board}>
          <header className={classes.header}>
            <div className={classes.sidedrawer_toogler}>
            <i class="fa-solid fa-bars"></i>
            </div>
            <div className={classes.logo}>
                <img src={logo_img} />
                <h1>Day<span>Organ</span></h1>
            </div>
            <nav className={classes.nav_section}>
                <ul>
                    <li><NavLink to="/todo">Todo'S<i class="fa-solid fa-rectangle-list"></i></NavLink></li>
                    </ul>
            </nav>
            <Outlet />
          </header>
          <section>
            <div className={classes.left_col}>
                <h1>Organise your day with<br />
                <span className={classes.day}>Day</span><span className={classes.organ}>Organ</span></h1>
                <p>
                    DayOrgan is a Todo app that provides
                    a whole <br /> lot of features that will make
                    your day a very useful one...
                </p>
                <div className={classes.app_section}>
                <button><i class="fa-brands fa-google-play"></i>Playstore</button>
                <button><i class="fa-brands fa-apple"></i>App Store</button>
                </div>
            </div>
            <div className={classes.right_col}>
                <img src={col_left_img} />
            </div>
          </section>
          </section>
        </main>
      </Aux>
    );
  }
}

export default HomePage;
