import * as d3 from "d3";

export const generateAxisArea = (data, radius, height, parser) => {
  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data, (d) => parser(d.date)))
    .range([-radius, radius]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => +d.value)])
    .range([height, 0]);

  return { xScale, yScale };
};

export const generateClipPathArea = (
  chart,
  radius,
  data,
  xScale,
  yScale,
  parser,
  color
) => {
  chart
    .append("clipPath")
    .attr("id", "clipCircle")
    .append("circle")
    .attr("r", radius * 0.85);

  chart
    .append("path")
    .attr("clip-path", "url(#clipCircle)")
    .datum(data)
    .attr("fill", color)
    .attr("fill-opacity", "0.1")
    .attr("stroke", color)
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .area()
        .x((d) => xScale(parser(d.date)))
        .y0(yScale(0))
        .y1((d) => yScale(d.value) + radius * 0.2)
    );
};
