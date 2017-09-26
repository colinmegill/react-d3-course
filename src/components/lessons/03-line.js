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
import picketty from "../../data/picketty";
import {VictoryAxis} from "victory";
import MultiSeriesLine from "./03-line-d3";

class Line extends React.Component {

  componentWillReceiveProps() {

  }

  componentWillMount() {

  }

  componentDidMount() {
    // MultiSeriesLine();
  }

  render() {

    const datasetUS = picketty.map((timeslice) => {
      return {
        date: new Date(timeslice["Date"]),
        value: timeslice["U.S."]
      }
    })

    console.log('datasetUS', datasetUS)

    const topPadding = 50;
    const rightPadding = 60;
    const bottomPadding = 50;
    const leftPadding = 60;
    
    const chartHeight = 800;
    const chartWidth = 1000;

    // y scales
    const ymax = d3.max(datasetUS.map((d) => { return d.value }))
    const y = d3.scaleLinear().domain([0, ymax])
                .range([0, chartHeight - topPadding - bottomPadding])

    // x scale
    const dates = datasetUS.map((d) => { return d.date });
    const x = d3.scaleTime().domain(d3.extent(dates))
                .range([0, chartWidth - leftPadding - rightPadding])

    const lineGenerator = d3.line().curve(d3.curveStepAfter)
                    .x((d, i) => { return x(d.date) })
                    .y((d, i) => { return y(d.value) })

    // console.log('generated path string', lineGenerator(datasetUS))

    return (
      <div>
        <Heading> Line </Heading>
        <svg id="d3LineChartAttachPoint"
          height={chartHeight}
          width={chartWidth} style={{border: "1px solid rgb(230,230,230)"}}>
          <path style={{
              fill: "none",
              stroke: "red",
              strokeWidth: "1px"
            }}
            d={lineGenerator(datasetUS)}
            />
          <VictoryAxis
            dependentAxis
            domain={y.domain()}
            height={chartHeight - topPadding - bottomPadding}
            standalone={false}
            label={"Percent of Income"}
            />
          <VictoryAxis
            domain={x.domain()}
            tickFormat={d3.timeFormat("%x")}
            tickCount={6}
            height={chartHeight - topPadding - bottomPadding}
            width={chartWidth - leftPadding - rightPadding}
            standalone={false}
            label={"Date"}
            />
        </svg>
      </div>
    );
  }
}

export default Line;
