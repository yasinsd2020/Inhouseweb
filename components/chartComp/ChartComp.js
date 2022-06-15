import { useState } from "react";
import { DateRangePicker } from 'rsuite';
import { Bar, defaults } from "react-chartjs-2";
import { ArcElement } from "chart.js";
Chart.register(ArcElement);
import { DateRange } from "react-date-range";
import Chart from "chart.js/auto";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import ChartCompDrop from "../chartComp/ChartCompDrop"



// import 'react-calendar/dist/Calendar.css';

const BarChart = () => {
  const [iscustom, setiscustom]=useState(false);
  console.log(iscustom)
  const [state, setState] = useState([
    {
      startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      endDate: new Date(),
      key: "selection",
    },
  ]);


  



  return (
    <div
      className="main-chart-container"
      style={{ width: "50%", margin: "50px 0" }}
    >
      <div
        className="chart-container"
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          className="chart-headers"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ paddingLeft: "35px" }}>Earning Statistics</h2>
            <ChartCompDrop custom={iscustom} setCustom={setiscustom}/>
          <div className="calendar-cont" >
            {iscustom && 
            <DateRange
              onChange={(item) => setState([item.selection])}
              ranges={state}
            />
          }
          </div>
        </div>

        <div
          className="s-1"
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div
            className="sub-chart-container"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "60%",
              height: "auto",
            }}
          >
            <Bar
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                datasets: [
                  {
                    label: "Total Earning",
                    data: [32, 49, 30, 25, 20, 30, 20, 22, 23, 37, 30],
                    backgroundColor: [
                      "#8892d6",
                      "#8892d6",
                      "#8892d6",
                      "#8892d6",
                      "#8892d6",
                      "#8892d6",
                      "#8892d6",
                      "#8892d6",
                      "#8892d6",
                      "#8892d6",
                      "#8892d6",
                    ],
                    width: [50],
                    borderColor: [
                      "#8892d6",
                      "#8892d6",
                      "#8892d6",
                      "#8892d6",
                      "#8892d6",
                      "#8892d6",
                      "#8892d6",
                      "#8892d6",
                      "#8892d6",
                      "#8892d6",
                      "#8892d6",
                    ],
                    borderWidth: 1,
                  },
                  {
                    label: "Total Revenue",
                    data: [47, 52, 67, 58, 9, 50, 20, 40, 11, 55, 47, 20],
                    backgroundColor: "#f06292",
                    borderColor: "#f06292",
                  },
                ],
              }}
              height={400}
              width={600}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
                legend: {
                  labels: {
                    fontColor: "#333",
                    usePointStyle: true,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
