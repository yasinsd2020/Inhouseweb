
import { useState } from "react";
import { Bar, defaults } from "react-chartjs-2";
import { ArcElement } from "chart.js";
Chart.register(ArcElement);
import Chart from "chart.js/auto";


const BarChart = () => {
  return (
    <div className="main-chart-container" style={{width:"45%",height:'50%', margin:'0 -.4rem',
    boxShadow:' 0 2px 5px rgba(0,0,0,0.25), 0 2px 5px rgba(0,0,0,0.22)'
    , background: "#ffffff"
    }}>

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
            width:"100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems:"center",
          }}
          >
          <h2 style={{paddingLeft:"35px"}}>Earning Statistics</h2>
            {/* <Calendar onChange={setDate} value={date} /> */}
        </div>

        <div className="s-1" style={{width:"100%", display:"flex", justifyContent:"flex-start", alignItems:"center"}}>
        <div
          className="sub-chart-container"
          style={{
           
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "600px",
              height: "auto",
              padding:'.5rem .5rem'
            }}
            >
                    <p style={{textAlign:'center' ,fontWeight:'500' ,transform:'rotate(-90deg)'}}>Currency:inr</p>
          <Bar
            data={{
                labels: ["January", "February", "March", "April", "May", "June", "July", "September", "October","November", "December"],
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
                data: [47, 52, 67, 58, 9, 50, 20, 40, 11, 55, 47, 20 ],
                backgroundColor: "#f06292",
                borderColor: "#f06292",
            },
        ],
    }}
    height={500}
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
      <p style={{textAlign:'center' ,fontWeight:'500'}}>TimeLine</p>
    </div>
    </div>
  );
};

export default BarChart;
