import React from "react";

const Circle = ({x, y, i}) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
    <circle
      r={Math.random() * 30}
      style={{
        fill: `rgb(${i * 40},0,0)`
      }}
    />

    </g>
  )
}

const Container = ({}) => {

  const data = [1,2,3,4,5,6,7].map(function(d, i){
    return [10 + d * 50, 10 + d * 50]
  });

  return (
    <svg
      width="500"
      height="500"
      style={{
        border: "1px solid blue",
        margin: "20px"
      }}>
      {data.map((d, i) => {
          return(
            <Circle i={i} x={d[0]} y={d[1]} />
          )
      })}
    </svg>
  );
};

export default Container;
