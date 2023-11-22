// const Chart = require("./Chart")

const my = document.getElementById("my").getContext("2d");
const my2 = document.getElementById("my2").getContext("2d");
const my3 = document.getElementById("my3").getContext("2d");

// const mu = new Chart(my,

//     )
const xValues = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];


myChart(my)
myChart(my2)
myChart(my3)


function myChart(id) {
    new Chart(id, {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                    label: "Fotovoltaica",
                    data: [0, 0, 0, 0, 0, 0, 0, 500, 2000, 4000, 6000, 7000, 7000, 7000, 6000, 4000, 2000, 1000, 200, 100],
                    borderColor: "blue",
                    fill: false,
                }, {
                    label: "Eólica",
                    data: [860, 1140, 1060, 1060, 1070, 1110, 2210, 6830, 7830, 6830, 2478],
                    borderColor: "red",
                    fill: false,
                },


            ],
        },
        options: {
            // legend: { display: false },
        },
    });
}