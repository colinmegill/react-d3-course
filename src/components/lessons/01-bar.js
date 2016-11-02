/*

  https://codeshare.io/ANRGa

  Managing scales
  Options for axis
*/

import React from "react";
// import _ from "lodash";
import * as d3 from "d3";
import mountains from "../../data/mountains";
import Heading from "../framework/heading";
import {VictoryAxis} from "victory";

class Bar extends React.Component {
  render() {
    console.log(mountains)
    const leftPadding = 100;
    const bottomPadding = 30;
    const chartHeight = 500;
    const chartWidth = 1000;
    const y = d3.scaleLinear().domain([0, 50000]).range([0, chartHeight])
    return (
      <div>
        <Heading> Bar Chart </Heading>
        <svg height={chartHeight} width={chartWidth} style={{border: "1px solid rgb(230,230,230)"}}>
          {mountains.map((mountain, i) => {
            if (i < 50){
              return (
                <rect
                  fill={"rgba(255,0,0,.2)"}
                  x={i*6 + leftPadding}
                  y={chartHeight - bottomPadding - y(mountain["Height (ft)"])}
                  width={4}
                  height={y(mountain["Height (ft)"])}/>
              )
            }
          })}
            <VictoryAxis
              padding={{
                top: 0,
                bottom: bottomPadding - 200,
                left: leftPadding, // cosmetic, 1px overhang, add +1 if persists
                right: 0 // this is confusing, but ok
              }}
              tickValues={mountains.map((mountain) => { return mountain['Mountain'] })}
              style={{
                tickLabels: {transform: "rotate(-7deg)"}
              }}
              width={chartWidth}
              standalone={false}
              label={"Position"}/>

            <VictoryAxis
              dependent
              padding={{
                top: 0,
                bottom: bottomPadding - 200,
                left: leftPadding, // cosmetic, 1px overhang, add +1 if persists
                right: 0 // this is confusing, but ok
              }}
              domain={y.domain()}
              standalone={false}
              // offsetY={150}
              orientation="left"
              label={"Height (ft)"}/>
        </svg>
      </div>
    );
  }
}

export default Bar;
