/*

const xScale = this.props.scale.x;
const yScale = this.props.scale.y;
const lineFunction = d3Shape.line()
    .curve(d3Shape[interpolation])
  .x((data) => xScale(data.x))
  .y((data) => yScale(data.y));
const path = lineFunction(this.props.data);
return (
  <path style={style} d={path}/>
);

https://github.com/d3/d3-shape#lines

*/

import React from "react";
import Radium from "radium";
// import _ from "lodash";
import * as d3 from "d3";
import Heading from "../framework/heading";
import MultiSeriesLine from "./03-line-d3";

class Line extends React.Component {

  componentDidMount() {
    MultiSeriesLine();
  }

  render() {
    const leftPadding = 30;
    const bottomPadding = 30;
    const chartHeight = 800;
    const chartWidth = 1000;
    const y = d3.scaleLinear().domain([0, 50000]).range([0, chartHeight])
    return (
      <div>
        <Heading> Line </Heading>
        <svg id="d3LineChartAttachPoint"
          height={chartHeight}
          width={chartWidth} style={{border: "1px solid rgb(230,230,230)"}}>

          <circle r={50} cx={200} cy={200}/>
        </svg>
      </div>
    );
  }
}

export default Line;
