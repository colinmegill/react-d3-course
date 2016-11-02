/* Beetles scatterplot with animations */

/*

beetles dataset
& random in setstate for playing with animations

import {scatterplotGenerator} from "../data/generators";

*/

import React from "react";
// import _ from "lodash";
import * as d3 from "d3";
import beetles from "../../data/beetles";
import Heading from "../framework/heading";
import {VictoryAnimation,VictoryAxis} from "victory";

const Circle = ({x, y, fill}) => {
  return (
    <g transform={"translate(" + x + "," + y + ")"}>
    <circle
      r={5}
      style={{
        fill: fill,
        fillOpacity: 0.5
      }}
    />
    </g>
  )
}

class Scatter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beetle: "Con"
    };
  }

  chooseBeetle(beetle) {

    return () => {
      this.setState({beetle});
    }
  }

  render() {
    const leftPadding = 60;
    const rightPadding = 60;
    const topPadding = 50;
    const bottomPadding = 50;
    const chartHeight = 300;
    const chartWidth = 800;


    const dataset = beetles.filter((beetle) => {
      if(this.state.beetle == "All") return true;
      return beetle["Species"] === this.state.beetle;
    })
    var beetleSpecies = beetles.map(function(d){ return d.Species; })
    beetleSpecies = _.uniq(beetleSpecies);


    const xDomain = d3.extent(dataset.map(function(d){ return d.Width; }));
    const yDomain = d3.extent(dataset.map(function(d){ return d.Angle; }));
    const x = d3.scaleLinear().domain(xDomain).range([0, chartWidth])
    const y = d3.scaleLinear().domain(yDomain).range([0, chartHeight])
    // Color by species
    const fillColor = d3.scaleOrdinal(d3.schemeCategory10).domain(beetleSpecies)


     // Better axis styling
    const axisStyle = {
                        axisLabel: {fontSize: 12, padding: 20, fontFamily: "Monaco"},
                        tickLabels: {fontSize: 10, padding: 5, fontFamily: "Monaco"}
                      };
    const zeroPadding = {
                          top: 0,
                          bottom: 0,
                          left: 0,
                          right: 0
                        };
    const buttonStyle = {
      paddingTop: "5px",
      paddingBottom: "5px",
      paddingLeft: "10px",
      paddingRight: "10px",
      margin: "2px",
      backgroundColor: "black",
      color: "white",
      border: "none"
    };

    return (
      <div>
        <Heading> Scatter </Heading>

        {
        // Show everything button and the buttons for the individual beetles
        }
        <button
          style={buttonStyle}
          onClick={this.chooseBeetle("All").bind(this)}>
          Everything
        </button>

        {beetleSpecies.map((d) => {
          return (
            <button
              key={d}
              style={
                _.merge(_.clone(buttonStyle), {
                  backgroundColor: fillColor(d)
                })
              }
              onClick={this.chooseBeetle(d).bind(this)}>
              {d}
            </button>
          )
        })}

        <svg
          height={chartHeight + topPadding + bottomPadding}
          width={chartWidth + leftPadding + rightPadding}
          style={{border: "1px solid rgb(230,230,230)"}}>

          <g transform={"translate(" + topPadding + "," + leftPadding + ")"} >

            {dataset.map((beetle, i) => {
              return (
                <VictoryAnimation data={beetle} duration={1000} easing={"linear"} key={i}>
                {(tweenedBeetle) => {
                  return (
                    <Circle
                      key={i}
                      x={x(tweenedBeetle.Width)}
                      y={y(tweenedBeetle.Angle)}
                      fill={fillColor(tweenedBeetle.Species)}
                    />
                  )
                }}
                </VictoryAnimation>
              )
            })}

            {
            // Original, without animation
            // {dataset.map((beetle, i) => {
            //   return (
            //     <VictoryAnimation data={beetle} duration={1000} easing={"linear"} key={i}>
            //     <Circle
            //       key={i}
            //       x={x(beetle.Width)}
            //       y={y(beetle.Angle)}
            //       fill={fillColor(beetle.Species)}
            //     />
            //     </VictoryAnimation>
            //   )
            // })}
          }

            // Y-Axis
            <VictoryAxis
              animate={true}
              dependentAxis
              style={axisStyle}
              padding={zeroPadding}
              domain={y.domain()}
              height={chartHeight}
              standalone={false}
              label={"Angle"}
            />

            // X-Axis
            <VictoryAxis
              animate={true}
              style={axisStyle}
              padding={zeroPadding}
              domain={x.domain()}
              height={chartHeight}
              width={chartWidth}
              standalone={false}
              label={"Width"}
            />

          </g>

        </svg>
      </div>
    );
  }
}

export default Scatter;

/* Done */
