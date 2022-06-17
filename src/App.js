import React, { Component } from "react";

import Aux from "./hoc/auxi/auxi";
import HomePage from "./containers/homepage/homepage";

class App extends Component {
  render() {
    return (
      <Aux>
        <HomePage />
      </Aux>
    );
  }
}

export default App;