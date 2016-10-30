/*

<VictoryAxis
  padding={{
    top: 0,
    bottom: 0,
    left: leftPadding, // cosmetic, 1px overhang, add +1 if persists
    right: rightPadding // this is confusing, but ok
  }}
  domain={x.domain()}
  offsetY={bottomPadding}
  width={entropyChartWidth}
  standalone={false}
  label={"Position"}
/>
<VictoryAxis
  dependentAxis
  padding={{
    top: 0,
    bottom: bottomPadding,
    left: leftPadding, // cosmetic, 1px overhang, add +1 if persists
    right: rightPadding / 2 // bug? why is that / 2 necessary...
  }}
  domain={y.domain()}
  offsetY={bottomPadding}
  width={entropyChartWidth}
  standalone={false}
/>

*/


/*

beetles dataset
& random in setstate for playing with animations

import {scatterplotGenerator} from "../data/generators";

*/
