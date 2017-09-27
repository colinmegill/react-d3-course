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
      volcano: null,
      canvasDrawn: false,
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
    if (this.canvas && !this.state.canvasDrawn) {

      // const i0 =  d3.interpolateHsvLong(d3.hsv(120, 1, 0.65), d3.hsv(60, 1, 0.90));
      // const i1 = d3.interpolateHsvLong(d3.hsv(60, 1, 0.90), d3.hsv(0, 0, 0.95));
      // const interpolateTerrain = (t) => { return t < 0.5 ? i0(t * 2) : i1((t - 0.5) * 2); };
      // const color = d3.scaleSequential(interpolateTerrain).domain([90, 190]);

      const n = this.state.volcano.width;
      const m = this.state.volcano.height;

      context = this.canvas.getContext("2d");
      image = context.createImageData(n, m);

      for (var j = 0, k = 0, l = 0; j < m; ++j) {
        for (var i = 0; i < n; ++i, ++k, l += 4) {
          let v = this.state.volcano.values[k];
                   image.data[l + 0] = v;
                   image.data[l + 1] = v;
                   image.data[l + 2] = v;
                   image.data[l + 3] = 255;
          // var c = d3.rgb(color(volcano.values[k]));
          // image.data[l + 0] = c.r;
          // image.data[l + 1] = c.g;
          // image.data[l + 2] = c.b;
          // image.data[l + 3] = 255;
        }
      }

      context.putImageData(image, 0, 0);
      this.setState({canvasDrawn: true})
    }
  }

  render() {
    console.log('06-hexbin render sees', this.state, this.canvas)

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
