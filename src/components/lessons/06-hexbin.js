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
  render() {
    console.log(mountains)
    const leftPadding = 30;
    const bottomPadding = 30;
    const chartHeight = 800;
    const chartWidth = 1000;
    const y = d3.scaleLinear().domain([0, 50000]).range([0, chartHeight])
    return (
      <div style={{margin: 20}}>
        <Heading text="Bar Chart"/>
        <svg height={chartHeight} width={chartWidth} style={{border: "1px solid rgb(230,230,230)"}}>

        </svg>
      </div>
    );
  }
}

export default Hexbin;
