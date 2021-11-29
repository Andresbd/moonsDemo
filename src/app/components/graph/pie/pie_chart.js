import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import PropTypes from "prop-types";
import {
  generatePieAxes,
  generatePieChart,
  generatePieLabels,
} from "./pie_chart_utils";
import { generateAxisArea, generateClipPathArea } from "../area/area_chart";

const PieChart = ({
  data,
  color,
  secondaryColor,
  label,
  value,
  linearData,
}) => {
  const donutChart = useRef();
  const pieLabel = label;
  const valueLabel = value;
  const parser = d3.timeParse("%Y-%m-%d");

  useEffect(() => {
    if (data && data.length > 0 && linearData && linearData.length > 0) {
      const height = window.innerHeight * 0.3;
      const currentWidth = donutChart.current.clientWidth;
      const radius = Math.min(currentWidth, height) / 2;

      const minAxis = radius * 0.88;
      const maxAxis = radius * 0.85;

      const arc = d3
        .arc()
        .innerRadius(radius * 0.9)
        .outerRadius(radius);

      const pie = d3
        .pie()
        .sort(null)
        .value((d) => d.value);

      // Prepare svg elements for rendering chart
      const svg = d3
        .select(donutChart.current)
        .append("svg")
        .attr("width", currentWidth)
        .attr("height", height)
        .attr("viewBox", [-currentWidth / 2, -height / 2, currentWidth, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

      const chart = svg.append("g").attr("id", "chart");

      generatePieChart(chart, pie, data, secondaryColor, color, arc);

      generatePieAxes(chart, maxAxis, minAxis);

      generatePieLabels(chart, pieLabel, valueLabel);

      const { xScale, yScale } = generateAxisArea(
        linearData,
        radius,
        height,
        parser
      );

      generateClipPathArea(
        chart,
        radius,
        linearData,
        xScale,
        yScale,
        parser,
        color
      );

      return () => {
        svg.remove();
      };
    }
  }, [data, color, secondaryColor, pieLabel, valueLabel, linearData, parser]);

  return <div id="history-chart" className="rel-position" ref={donutChart} />;
};

PieChart.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

export default PieChart;
