// const Chart = require("./Chart")

const my = document.getElementById("my").getContext("2d");
const my2 = document.getElementById("my2").getContext("2d");
const my3 = document.getElementById("my3").getContext("2d");

// const mu = new Chart(my,

//     )
const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];


myChart(my)
myChart(my2)
myChart(my3)


function myChart(id) {
  new Chart(id, {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          label:"DS",
          data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
          borderColor: "red",
          fill: false,
        },
        {
          data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
          borderColor: "green",
          fill: false,
        },
        {
          data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
          borderColor: "blue",
          fill: false,
        },
      ],
    },
    options: {
      // legend: { display: false },
    },
  });
}
