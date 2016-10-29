import React from "react";
import Radium from "radium";

@Radium
class Heading extends React.Component {
  getStyles() {
    return {
      base: {
        fontFamily: "Helvetica",
        fontSize: 24,
        color: "rgb(130,130,130)"
      }
    };
  }
  render() {
    const styles = this.getStyles();
    return (
      <p style={[
        styles.base,
        this.props.style
      ]}>
        {this.props.children}
      </p>
    );
  }
}

export default Heading;
