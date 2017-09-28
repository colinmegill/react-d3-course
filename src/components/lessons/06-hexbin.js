/*

  beetles dataset

  http://bl.ocks.org/mbostock/5583afd2a0d03b9c94918659fa151cac

*/
import React from "react";
import Radium from "radium";
// import _ from "lodash";
import * as d3 from "d3";
import * as d3contour from 'd3-contour';
import * as d3chromatic from 'd3-scale-chromatic';
import mountains from "../../data/mountains";
import Heading from "../framework/heading";

const color = d3.scaleSequential(d3chromatic.interpolateYlGnBu)
  .domain([0, 1.8]); // Points per square pixel.
const geoPath = d3.geoPath();

const Contour = ({contour}) => <path fill={color(contour.value)} d={geoPath(contour)} />

class Hexbin extends React.Component {
  constructor(props) {
    super(props);

    this.height = 960;
    this.width = 960;
    this.margin = {top: 20, right: 30, bottom: 30, left: 40};


    this.state = {
      volcano: null,
      diamonds: null,
      canvasDrawn: false,
    };
  }
  componentWillMount () {
    // const url = "https://gist.githubusercontent.com/mbostock/3074470/raw/472f0f412886340711f6b06cc2eebd5665538a95/volcano.json";
    // d3.json(url, (error, volcano) => {
    // d3.tsv(url, (data) => {
    //   if (!error) {
    //     this.setState({volcano})
    //   } else {
    //     console.log(error);
    //   }
    // },
    const diamondsUrl = "https://gist.githubusercontent.com/mbostock/7f5f22524bd1d824dd53c535eda0187f/raw/f94b67239d2849dd5d96c57dc5cf1004ff5117d0/diamonds.tsv";
    d3.tsv(diamondsUrl, (d) => {
      d.carat = +d.carat;
      d.price = +d.price;
      return d;
    }, (error, diamonds) => {
      if (error) throw error;

      const x = d3.scaleLog()
        .domain([2e-1, 5e0])
        .rangeRound([this.margin.left, this.width - this.margin.right]);
      const y = d3.scaleLog()
        .domain([3e2, 2e4])
        .rangeRound([this.height - this.margin.bottom, this.margin.top]);


      console.log('got diamonds data', diamonds)
      var contoursParsed = d3contour.contourDensity()
        .x(function(d) { return x(d.carat); })
        .y(function(d) { return y(d.price); })
        .size([this.width, this.height])
        .bandwidth(10)
      (diamonds)

      this.setState({diamonds, contoursParsed})

    });

  }
  componentDidUpdate() {

  }

  drawContours() {
    return this.state.contoursParsed.map((contour) => <Contour contour={contour} />)
  }

  render() {
    console.log('06-hexbin render sees', this.state, this.canvas)

    return (
      <div>
        <Heading> Hex bins </Heading>
        <svg
          style={{border: "1px solid black"}}
          width={this.width}
          height={this.height}>
          {this.state.contoursParsed ? this.drawContours() : null }
        </svg>
      </div>
    );
  }
}

export default Hexbin;

// {
//   !this.state.volcano ? null :
//   <canvas
//     style={{border: "1px solid green"}}
//     height={this.state.volcano.m}
//     width={this.state.volcano.n}
//     ref={(canvas) => {this.canvas = canvas;}}/>
// }

// const leftPadding = 30;
// const bottomPadding = 30;
// const chartHeight = 800;
// const chartWidth = 1000;
// <svg height={chartHeight} width={chartWidth} style={{border: "1px solid rgb(230,230,230)"}}>
//
// </svg>

// let context;
// let image;
// if (this.canvas && !this.state.canvasDrawn) {

  // const i0 =  d3.interpolateHsvLong(d3.hsv(120, 1, 0.65), d3.hsv(60, 1, 0.90));
  // const i1 = d3.interpolateHsvLong(d3.hsv(60, 1, 0.90), d3.hsv(0, 0, 0.95));
  // const interpolateTerrain = (t) => { return t < 0.5 ? i0(t * 2) : i1((t - 0.5) * 2); };
  // const color = d3.scaleSequential(interpolateTerrain).domain([90, 190]);

//   const n = this.state.volcano.width;
//   const m = this.state.volcano.height;
//
//   context = this.canvas.getContext("2d");
//   image = context.createImageData(n, m);
//
//   for (var j = 0, k = 0, l = 0; j < m; ++j) {
//     for (var i = 0; i < n; ++i, ++k, l += 4) {
//       let v = this.state.volcano.values[k];
//                image.data[l + 0] = v;
//                image.data[l + 1] = v;
//                image.data[l + 2] = v;
//                image.data[l + 3] = 255;
//       // var c = d3.rgb(color(volcano.values[k]));
//       // image.data[l + 0] = c.r;
//       // image.data[l + 1] = c.g;
//       // image.data[l + 2] = c.b;
//       // image.data[l + 3] = 255;
//     }
//   }
//
//   context.putImageData(image, 0, 0);
//   this.setState({canvasDrawn: true})
// }
