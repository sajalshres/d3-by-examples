import * as d3 from "d3";

d3.select("#app")
  .append("h5")
  .append("text")
  .text(`D3 version is ${d3.version}`);
