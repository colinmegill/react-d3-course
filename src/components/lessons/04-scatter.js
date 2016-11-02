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
import {VictoryAxis} from "victory";



class Scatter extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      beetle: 'Con'
    };
  }
  chooseBeetle(beetle){
    return() =>{
      this.setState({beetle})
    }
  }
  render() {
    const topPadding = 50;
    const leftPadding = 50;
    const rightPadding = 50;
    const bottomPadding = 50;
    const chartHeight = 500;
    const chartWidth = 1000;

    const dataset = beetles.filter((beetle) => {
      if(this.state.beetle === "All"){
        return true;
      }else{
        return beetle["Species"]=== this.state.beetle;
      }
    })

    console.log(dataset.length)

    //xAxis
    const xmax = d3.max(dataset.map(function(d){ return d.Width; }));
    const xmin = d3.min(dataset.map(function(d){ return d.Width; }));
    const x = d3.scaleLinear().domain([xmin, xmax]).range([0 + leftPadding, chartWidth - rightPadding])

    //yAxis
    const ymax = d3.max(dataset.map(function(d){ return d.Angle; }));
    const ymin = d3.min(dataset.map(function(d){ return d.Angle; }));
    const y = d3.scaleLinear().domain([ymin, ymax]).range([0 + bottomPadding, chartHeight - topPadding])


    const axisStyle = {
                        axis: {stroke: "#756f6a"},
                        axisLabel: {fontSize: 12, padding: 40, fontFamily: "Monaco"},
                        ticks: {stroke: "grey"},
                        tickLabels: {fontSize: 10, padding: 5, fontFamily: "Monaco"}
                      };

    //Color
    var color = d3.scaleOrdinal(d3.schemeCategory10)
                  .domain(["Con", "Hep", "Hei"])

    return (
      <div>
        <Heading> Scatter </Heading>
          <button
              style={{
                backgroundColor: this.state.beetle === "Con" ? "red" : "white",
                color: this.state.beetle === "Con" ? "white" : "black"
              }}
              onClick={this.chooseBeetle("Con").bind(this)}>
              Con
          </button>
          <button
              style={{}}
              onClick={this.chooseBeetle("Hep").bind(this)}>
              Hep
          </button>
          <button
              style={{}}
              onClick={this.chooseBeetle("Hei").bind(this)}>
              Hei
          </button>
          <button
              style={{}}
              onClick={this.chooseBeetle("All").bind(this)}>
              All
          </button>
          <p> {this.state.beetle} </p>
        <svg height={chartHeight} width={chartWidth} style={{border: "1px solid rgb(230,230,230)"}}>
          {
            dataset.map((d, i) => {
              return (
                  <g key={i} transform={"translate(" + x(d.Width) + "," + y(d.Angle) + ")"}>
                    <circle
                      r={3}
                      style={{stroke: 'black', fill: color(d.Species)}} />
                      <text style={{fontSize: 10, fill: 'gray'}}>{d.Species}</text>
                  </g>
                )
            })
          }
          // Y-Axis
          <VictoryAxis
            dependentAxis
            style={axisStyle}
            domain={y.domain()}
            height={chartHeight}
            standalone={false}
            label={"Angle"}/>

          // X-Axis
          // Not matching with dots
          <VictoryAxis
            style={axisStyle}
            domain={x.domain()}
            tickCount={10}
            height={chartHeight}
            width={chartWidth}
            standalone={false}
            label={"Width"}/>
        </svg>
      </div>
    );
  }
}

export default Scatter;
