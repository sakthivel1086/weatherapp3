import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "degree"],
  ["23%", 27],
  ["29%", 28],
  ["58%", 28],
  ["75%", 29],
  ["33%", 30],
  ["20%", 29],
  ["73%", 29],
  ["49%", 28],
];

export const options = {
  title: "",
//   hAxis: { title: "", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 20 ,maxValue: 40},
  chartArea: { width: "80%", height: "70%" },
  legend:'none',
};

export default function ChartComponent() {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
