import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <>
      <h1>Bar chart</h1>
      <div style={{ width: "600px" }}>
        <Bar
          style={{
            backgroundColor: "#0fa02020",
          }}
          data={{
            labels: ["Um", "Dois", "Três"],
            axis: "x",
            datasets: [
              {
                label: "My First Dataset",
                backgroundColor: "#0ff",
                border: 0,
                fill: true,
                data: [10, 4, 3],
                tension: 0.1,
                pointBackgroundColor: "#000",
                pointBorderColor: "#6e6aeb",
                pointRadius: 3,
                borderWidth: 2,
              },
              {
                label: "My Second Dataset",
                backgroundColor: "#0a0",

                data: [9, 8, 5],
                tension: 0.1,
                fill: false,
              },
            ],
          }}
          type="bar"
          options={{
            scales: {
              x: {
                grid: {
                  color: "rgba(0,0,0,0)",
                  borderColor: "grey",
                  tickColor: "grey",
                },
              },
              y: {
                grid: {
                  color: "red",
                  borderColor: "grey",
                  tickColor: "grey",
                  display: false,
                },
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default BarChart;
