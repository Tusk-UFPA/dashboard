// const Chart = require("./Chart")

const my = document.getElementById("my").getContext("2d");
const my2 = document.getElementById("my2").getContext("2d");
const my3 = document.getElementById("my3").getContext("2d");

// const mu = new Chart(my,

//     )

let solaURL = "sola";
async function solaApi() {
  let res = await fetch(solaURL);
  let data = await res.json();
  return data;
}

myChart(my);
myChart1(my2);
myChart2(my3);

async function myChart(id) {
  const solaData = await solaApi();
  console.log(solaData);

  new Chart(id, {
    type: "line",
    data: {
      labels: solaData.sola.time,
      datasets: [
        {
          label: solaData.sola.label,
          data: solaData.sola.data,
          borderColor: "blue",
          fill: true,
        },
        {
          label:solaData.eolica.label,
          data: solaData.eolica.data,
          borderColor: "red",
          fill: true,
        },
      ],
    },
    options: {
        legend: { display: false },
      plugins: {
        customCanvasBackgroundColor: {
          color: "Green",
        },
        title: {
          display: true,
          text: "Voltagem",
          padding: {
            top: 10,
            bottom: 30,
          },
        },
      },
    },
  });
}

async function myChart1(id) {
    const solaData = await solaApi();
    console.log(solaData);
  
    new Chart(id, {
      type: "line",
      data: {
        labels: solaData.sola.time,
        datasets: [
          {
            label: solaData.sola.label,
            data: solaData.sola.data,
            borderColor: "blue",
            fill: true,
          },
        ],
      },
      options: {
          legend: { display: false },
        plugins: {
          customCanvasBackgroundColor: {
            color: "Green",
          },
          title: {
            display: true,
            text: "Voltagem Fotovoltaica",
            padding: {
              top: 10,
              bottom: 30,
            },
          },
        },
      },
    });
  }
  
  async function myChart2(id) {
    const solaData = await solaApi();
    console.log(solaData);
  
    new Chart(id, {
      type: "line",
      data: {
        labels: solaData.sola.time,
        datasets: [
          {
            label:solaData.eolica.label,
            data: solaData.eolica.data,
            borderColor: "red",
            fill: true,
          },
        ],
      },
      options: {
          legend: { display: false },
        plugins: {
          customCanvasBackgroundColor: {
            color: "Green",
          },
          title: {
            display: true,
            text: "Voltagem Eólica",
            padding: {
              top: 10,
              bottom: 30,
            },
          },
        },
      },
    });
  }
  