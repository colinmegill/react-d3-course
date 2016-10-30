/*

  https://bl.ocks.org/mbostock/4339083

  flare dataset

*/
import React from "react";
import * as d3 from "d3";
import flare from "../../data/flare";

class Node extends React.Component {
  render() {
    return (
      <g transform={"translate(" + this.props.y + "," + this.props.x + ")"}>
        <circle r={this.props.hasChildren ? 3 : 1} />
        <text
          dx={this.props.hasChildren ? -8 : 8}
          dy={3}
          style={{"fontFamily": "Helvetica", "fontSize": "10px"}}
          textAnchor={this.props.hasChildren ? "end" : "start"}>
          {this.props.name}
        </text>
      </g>
    );
  }
}

class Link extends React.Component {
  render() {
    const diagonal = d3.svg.diagonal().projection((d) => {
      return [d.y, d.x];
    });

    return (
      <path d={
        diagonal(this.props.datum)}
        style={{
          fill: "none",
          stroke: "darkgrey",
          strokeWidth: ".4px"
        }}>
      </path>
    );
  }
}

class Tree extends React.Component {
  render() {
    const svgWidth = 2000;
    const svgHeight = 3000;
    const d3Tree = d3.layout.tree().size([svgHeight, svgWidth - 300]);
    const nodes = d3Tree.nodes(this.props.flare);
    const links = d3Tree.links(nodes);

    return (
      <div>
        <div style={{"marginLeft": "20px", "fontFamily": "Helvetica"}}>
        <h1> Dendogram </h1>

        </div>
        <svg
          style={{"border": "2px solid black", "margin": "20px"}}
          width={svgWidth}
          height={svgHeight}>
					<g transform={"translate(100,0)"}>
          {
            nodes.map((node, index) => {
              return (
                <Node
                  key={index}
                  k={index}
                  hasChildren={node.children ? true : false}
                  name={node.name}
                  x={node.x}
                  y={node.y}/>
              );
            })
          }
          {
            links.map((link, index) => {
              return (
                <Link
                  datum={link}
                  key={index}/>
              );
            })
          }
          </g>
        </svg>
      </div>
    );
  }
}

export default Tree;
