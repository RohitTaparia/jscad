import "../css/Cube.css";

import * as React from "react";
import { cube } from "@jscad/modeling/src/primitives";
import { Renderer } from "jscad-react";
import {Form2} from "./Form2.js"
const Cube = ({height,width,depth,x_coordinate,y_coordinate,z_coordinate}) => {
  console.log(height);
  console.log(width);
  const [solids] = React.useState([cube([x_coordinate, y_coordinate, z_coordinate],12)]);
  return <Renderer solids={solids} height={height} width={width} />;
};

export default Cube;
