import React from "react";
import {Link} from "react-router";
import Heading from "./framework/heading";
import Flex from "./framework/flex";

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
      <Flex alignItems={"baseline"} justifyContent="space-between" style={{margin: 20}}>
        <div>
          <p style={{fontSize: 12, fontWeight: 700, textTransform: "uppercase"}}> React & D3 Koans </p>
          <Link style={styles.link} to="bar">1: Basic bar chart</Link>
          <Link style={styles.link} to="labels">2: Labels</Link>
          <Link style={styles.link} to="line">3: Line</Link>
          <Link style={styles.link} to="scatter">4: Scatterplot</Link>
          <Link style={styles.link} to="scatter-animated">4a: Animating a scatterplot</Link>
          <Link style={styles.link} to="tree">5: Tree </Link>
          <Link style={styles.link} to="hexbin">6: Hexbin </Link>
          <Link style={styles.link} to="multiline">7: Multiline </Link>
          <Link style={styles.link} to="nobel"> Nobel </Link>
        </div>
        {this.props.children}
      </Flex>
    );
  }
}

export default App;
