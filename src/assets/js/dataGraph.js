//<débutinitialisation de ma courbe>
const datapoints = [1200, 750, 775, 760, 2560];
const DATA_COUNT = datapoints.length; //+ 2;//
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}
const data = {
  labels: labels,
  datasets: [
    {
      label: "Compte", // nom chaque points de la courbe//
      data: datapoints, //mon tableau de point
      borderColor: "purple", //couleur courbe//
      fill: true, //colore le dessous de la courbe
      cubicInterpolationMode: "monotone", //gere la forme de la courbe//
    },
  ],
};
// </block:setup>

// <block:config:0>
const config = {
  type: "line",
  data: data,
  options: {
    elements: {
      point: {
        radius: 0, //gere les cercles des points en donnant un rayon
      },
    },
    responsive: true, //taille courbe
    plugins: {
      legend: false,
      //   title: {
      //     display: true,
      //     text: "Chart.js Line Chart - Cubic interpolation mode",
      //   },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  },
};

/*Le contexte du canevas HTML */
let context = document.getElementById("myChart").getContext("2d");
/* Création du graphique */
let chart = new Chart(context, config);
//new CHART avec un grand C car elle appelle la bibliothèque//

/* Générer des données aléatoires */
// function generateData() {
//   randomTemperature = (Math.random() * Math.floor(50)).toFixed(2); // Deux chiffres après la virgule
//   addTemperature(new Date().toLocaleTimeString(), randomTemperature);
// }

function addOperator(positionX, temperature) {
  /* Ajoute la valeur en X */
  config.data.labels.push(positionX);

  /* Ajoute la valeur */
  config.data.datasets[0].data.push(temperature);

  /* Rafraichir le graphique */
  chart.update();
}

// filtre débit crédit

let allOpe = document.getElementById("allOperation");
