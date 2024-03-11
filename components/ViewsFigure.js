import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
});

const PlotlyViews = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mediaQuery.matches ? "dark" : "light");

    const handler = (e) => setTheme(e.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const xVals = [
    "Nov-21",
    "Dec-21",
    "Jan-22",
    "Feb-22",
    "Mar-22",
    "Apr-22",
    "May-22",
    "Jun-22",
    "Jul-22",
    "Aug-22",
    "Sep-22",
    "Oct-22",
    "Nov-22",
    "Dec-22",
    "Jan-23",
    "Feb-23",
    "Mar-23",
    "Apr-23",
    "May-23",
    "Jun-23",
    "Jul-23",
    "Aug-23",
    "Sep-23",
    "Oct-23",
    "Nov-23",
    "Dec-23",
    "Jan-24",
    "Feb-24",
    "Mar-24",
    "Apr-24",
    "May-24",
    "Jun-24",
    "Jul-24",
    "Aug-24",
    "Sep-24",
    "Oct-24",
    "Nov-24",
    "Dec-24",
  ];
  const views = [
    3862, 2966, 1088, 10208, 12060, 26310, 4297, 2611, 2610, 1457, 2965, 5107,
    9855, 7813, 10452, 47217, 14022, 10969, 4380, 2551, 2101, 2579, 5365, 10795,
    14374, 26688, 12537, 7856,
  ];

  const layout = {
    autosize: true,
    paper_bgcolor: theme === "dark" ? "rgba(0,0,0,1)" : "rgba(255,255,255,1)",
    plot_bgcolor: "rgba(0,0,0,0)",
    font: {
      family: "Helvetica",
      color: theme === "dark" ? "#fff" : "#333",
    },
    title: {
      text: "<b>Количество просмотров за месяц</b>",
      font: {
        family: "Helvetica",
        size: 24,
      },
      x: 0.5,
      xanchor: "center",
      y: 0.9,
      yanchor: "top",
    },
    xaxis: {
      type: "category",
    },
    yaxis: {
      fixedrange: true,
      gridcolor: theme === "dark" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.1)",
    },
  };

  return (
    <Plot
      data={[
        {
          x: xVals,
          y: views,
          type: "bar",
          mode: "lines+markers",
          marker: { color: "#facc15" },
        },
      ]}
      layout={layout}
      useResizeHandler={true}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default PlotlyViews;
