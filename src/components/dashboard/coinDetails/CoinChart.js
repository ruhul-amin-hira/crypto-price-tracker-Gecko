import React, { useContext } from "react";
//import "chartjs-adapter-date-fns";

import { format } from "date-fns";

import Chart from "react-apexcharts";
import { CoinCointext } from "../../../hooks/CoinContext";

const CoinChart = ({ data }) => {
  const chartData = data.data.data.prices;
  const { color } = useContext(CoinCointext);

  //  console.log(finalData);

  const option = {
    options: {
      chart: {
        id: "basic-bar",
      },

      fill: {
        colors: ["#44ff9b"],
        opacity: 0.5,
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.2,
          gradientToColors: ["#81e49f"],
          //inverseColors: true,
          opacityFrom: 0.5,
          opacityTo: 0.2,
          stops: [0, 50, 100],
          colorStops: [],
        },
      },

      stroke: {
        width: 2,
        colors: ["#4dce78"],
      },
      grid: {
        // borderColor: color.borderColor,
      },
      xaxis: {
        type: "datetime",
        labels: {
          datetimeUTC: false,
          datetimeFormatter: {
            year: "yyyy",
            month: "MMM 'yy",
            day: "dd MMM",
            hour: "HH:mm",
          },
          style: {
            fontFamily: "Helvetica, Arial, sans-serif",
            // cssClass: "label-class",
          },
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val.toFixed(2);
          },
          style: {
            fontSize: "1.3rem",
            // cssClass: "label-class",
          },
        },
      },
      markers: {
        size: 0,
        colors: ["#4dce78"],
        strokeColors: "#fff",
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 5,
        offsetX: 0,
        offsetY: 0,
        showNullDataPoints: true,
      },
      tooltip: {
        x: {
          format: "dd MMM hh:mm tt",
        },
        y: {
          formatter: function (val) {
            return val.toFixed(6);
          },
        },
        marker: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
    },
    series: [
      {
        name: "price",
        data: chartData,
      },
    ],
  };

  // console.log(chartData);
  return (
    <div className="coinchart">
      <Chart
        options={option.options}
        series={option.series}
        type="area"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default CoinChart;
