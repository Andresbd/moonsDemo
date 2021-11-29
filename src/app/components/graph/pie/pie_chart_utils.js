/// Utility function to draw in svg pie chart
import { appDarkGrey, appGrey } from "../../../utils/colors";

export const generatePieChart = (
  chart,
  pie,
  data,
  secondaryColor,
  color,
  arc
) => {
  chart
    .selectAll("path")
    .data(pie(data))
    .join("path")
    .attr("fill", (d, i) => (i === 0 ? secondaryColor : color))
    .attr("d", arc);
};

/// Utility function to draw in chart axes
export const generatePieAxes = (chart, maxAxis, minAxis) => {
  const axes = chart.append("g").attr("id", "axes");

  axes
    .append("line")
    .style("stroke", "grey")
    .style("stroke-width", 1.5)
    .attr("x1", 0)
    .attr("y1", -minAxis)
    .attr("x2", 0)
    .attr("y2", -maxAxis);

  axes
    .append("line")
    .style("stroke", "grey")
    .style("stroke-width", 1.5)
    .attr("x1", 0)
    .attr("y1", minAxis)
    .attr("x2", 0)
    .attr("y2", maxAxis);

  axes
    .append("line")
    .style("stroke", "grey")
    .style("stroke-width", 1.5)
    .attr("x1", -minAxis)
    .attr("y1", 0)
    .attr("x2", -maxAxis)
    .attr("y2", 0);

  axes
    .append("line")
    .style("stroke", "grey")
    .style("stroke-width", 1.5)
    .attr("x1", minAxis)
    .attr("y1", 0)
    .attr("x2", maxAxis)
    .attr("y2", 0);
};

/// Utility function to draw in chart labels
export const generatePieLabels = (chart, pieLabel, valueLabel) => {
  const label = chart.append("g").attr("id", "label");

  label
    .append("text")
    .attr("text-anchor", "middle")
    .attr("y", "-10%")
    .style("font", "1.5em Open Sans, sans-serif")
    .style("fill", appGrey)
    .text(pieLabel);

  label
    .append("text")
    .attr("text-anchor", "middle")
    .attr("y", "3%")
    .style("font", "2em Open Sans, sans-serif")
    .style("fill", appDarkGrey)
    .text(valueLabel);
};
