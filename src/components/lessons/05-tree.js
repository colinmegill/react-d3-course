/*

  spinner
  functional stateless: https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.eopy1rroz

  state punt: https://bl.ocks.org/mbostock/4339083
  d3 4.0 new tree: https://bl.ocks.org/mbostock/4339184
  flare dataset

*/
import React from "react";
import Heading from "../framework/heading";
import * as d3 from "d3";
import flare from "../../data/flare";

const Node = ({x, y, hasChildren, name, i}) => {
  return (
    <g transform={"translate(" + y + "," + x + ")"}>
      <circle r={hasChildren ? 2 : .5} />
      <text
        dx={hasChildren ? -8 : 8}
        dy={3}
        style={{fontFamily: "Helvetica", fontSize: 10}}
        textAnchor={hasChildren ? "end" : "start"}>
        {name}
      </text>
    </g>
  );
};

const Link = ({d}) => {
  // const diagonal = d3.svg.diagonal().projection((d) => {
  //   return [d.y, d.x];
  // });

  return (
    <path d={
      "M" + d.y + "," + d.x
          + "C" + (d.y + d.parent.y) / 2 + "," + d.x
          + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
          + " " + d.parent.y + "," + d.parent.x
      }
      style={{
        fill: "none",
        stroke: "darkgrey",
        strokeWidth: ".4px"
      }}>
    </path>
  );
};

const Tree = ({root}) => {

  console.log("rendering tree");

  const width = 1200;
  const height = 600;
  const tree = d3.tree().size([height, width - 160]);

  const links = tree(root).descendants().slice(1);
  return (
    <svg
      style={{"border": "2px solid black", "margin": "20px"}}
      width={width}
      height={height}>
      <g transform={"translate(100,0)"}>
      {
        /* nodes */
        root.descendants().map((node, index) => {
          // console.log(node)
          return (
            <Node
              key={index}
              i={index}
              hasChildren={node.children ? true : false}
              name={node.name}
              x={node.x}
              y={node.y}/>
          );
        })
      }
      {
        /* links */
        links.map((link, index) => {
          return (
            <Link
              d={link}
              key={index}/>
          );
        })
      }
      </g>
    </svg>
  );
};

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      root: null
    };
  }
  componentWillMount() {
    d3.csv("https://raw.githubusercontent.com/d3/d3-hierarchy/master/test/data/flare.csv", (error, data) => {
      this.setState({root: this.process(data)});
    });
  }

  process(data) {
    const stratify = d3.stratify().parentId((d) => {
      return d.id.substring(0, d.id.lastIndexOf("."));
    });

    return stratify(data).sort((a, b) => {
      return (a.height - b.height) || a.id.localeCompare(b.id);
    });
  }
  spinner() {
    console.log("spinning")
    return (
      <p> "Loading tree data..." </p>
    )
  }
  render() {
    return (
      <div style={{margin: 20}}>
        <Heading> Dendogram </Heading>
        {this.state.root ? <Tree root={this.state.root}/> : this.spinner()}
      </div>
    );
  }
}


export default Container;
