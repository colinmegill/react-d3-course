import React from "react";
import {Link} from "react-router";
import Heading from "./framework/heading";

const styles = {
  link: {
    display: "block",
    fontSize: 16,
    color: "rgb(80,80,80)",
    marginBottom: 10
  }
};

class App extends React.Component {

  render() {

    return (
      <div style={{margin: 20}}>
        <Heading> Table of Contents </Heading>
        <Link style={styles.link} to="bar">1: basic bar chart</Link>
        <Link style={styles.link} to="labels">2: adding labels</Link>
      </div>
    );
  }
}

export default App;
