import React, { Component } from "react";

import Aux from "./hoc/auxi/auxi";
import HomePage from "./containers/homepage/homepage";
import Todo from "./containers/todos/todos";

import { Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/todo" element={ <Todo /> } />
      </Routes>
    );
  }
}

export default App;