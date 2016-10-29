import React from "react";
import {Link} from "react-router";

class App extends React.Component {

  render() {

    return (
      <div>
        <p> Table of Contents </p>
        <Link to="bar">1: basic bar chart</Link>
      </div>
    );
  }
}

export default App;
