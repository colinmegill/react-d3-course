import React from "react";
import ColorBy from "./colorBy";

class Controls extends React.Component {
  render() {
    return (
      <div style={{padding: 40, backgroundColor: "rgb(230,230,230)"}}>
        <p> Color By </p>
        <ColorBy/>
      </div>
    );
  }
}

export default Controls;
