/*

  beetles dataset

  http://bl.ocks.org/mbostock/5583afd2a0d03b9c94918659fa151cac

*/

import React from "react";
import Radium from "radium";
// import _ from "lodash";
import * as d3 from "d3";
import mountains from "../../data/mountains";
import Heading from "../framework/heading";

class Hexbin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volcano: null
    };
  }
  componentWillMount () {
    const url = "https://gist.githubusercontent.com/mbostock/3074470/raw/472f0f412886340711f6b06cc2eebd5665538a95/volcano.json";
    d3.json(url, (error, volcano) => {
      if (!error) {
        this.setState({volcano})
      } else {
        console.log(error);
      }
    })
  }
  componentDidUpdate() {
    let context;
    let image;
    if (this.canvas) {
      context = this.canvas.getContext("2d");
      // image = context.createImageData(this.state.volcano.n, this.state.volcano.m);
    }

    console.log("componentDidUpdate sees: ", this.canvas, context, image)
  }

  render() {
    console.log('06-hexbin render sees', this.state, this.canvas)

    // window.ourCanvas.

    return (
      <div>
        <Heading> Hex bins </Heading>
        {
          !this.state.volcano ? null :
          <canvas
            style={{border: "1px solid green"}}
            height={this.state.volcano.m}
            width={this.state.volcano.n}
            ref={(canvas) => {this.canvas = canvas;}}/>
        }

      </div>
    );
  }
}

export default Hexbin;

// const leftPadding = 30;
// const bottomPadding = 30;
// const chartHeight = 800;
// const chartWidth = 1000;
// <svg height={chartHeight} width={chartWidth} style={{border: "1px solid rgb(230,230,230)"}}>
//
// </svg>
