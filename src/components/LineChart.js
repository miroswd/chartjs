import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  return (
    <>
      <h1>Line chart</h1>
      <div style={{ width: "600px" }}>
        <Line
          style={{
            backgroundColor: "#0fa02020",
          }}
          data={{
            labels: ["Um", "Dois", "Três"],
            datasets: [
              {
                label: "My First Dataset",
                backgroundColor: "#0ff",
                borderColor: "#f00",
                fill: false,
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
                borderColor: "#f00",
                data: [9, 8, 5],
                tension: 0.1,
                fill: false,
              },
            ],
          }}
          type="Line"
        />
      </div>
    </>
  );
};

export default LineChart;
