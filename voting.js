function submit() {
  let ele = document.getElementsByName("framework");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      alert("Data saved successfully");
      let value = localStorage.getItem(ele[i].value);
      value++;

      console.log(value);
      localStorage.setItem(ele[i].value, value);
    }
  }
}

let react = localStorage.getItem("React");
let angular = localStorage.getItem("Angular");
let solid = localStorage.getItem("Solid.js");
let svelte = localStorage.getItem("Svelte");
let vue = localStorage.getItem("Vue");

const xValues = ["React", "Angular", "Vue", "Svelte", "Solid"];
const yValues = [react, angular, vue, svelte, solid];
const barColors = ["red", "green", "blue", "orange", "brown"];


function verticalBarGraph() {
  const container = document.getElementById("heading");

  const h1Element = document.createElement("h1");

  h1Element.textContent = "Vertical Bar Graph";

  container.textContent = "";
  container.appendChild(h1Element);


  const ctx = document.getElementById("myChartVerticalBarGraph").getContext("2d");


  new Chart(ctx, {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "Frameworks Used in Modern Web Applications",
      },
      plugins: {
        datalabels: {
          anchor: "end",
          align: "top",
          color: "#000",
          font: {
            weight: "bold",
          },
          formatter: (value, context) => {
            const data = context.chart.data.datasets[0].data;
            const total = data.reduce((a, b) => Number(a) + Number(b), 0);
            if (total === 0) return "0%";
            const percentage = ((value / total) * 100).toFixed(1);
            return `${value} (${percentage}%)`;
          },
        },
      },
    },
    plugins: [ChartDataLabels],
  });
}

function horizontalBarGraph() {
  const container = document.getElementById("heading");

  const h1Element = document.createElement("h1");

  h1Element.textContent = "Horizontal Bar Graph";

  container.textContent = "";
  container.appendChild(h1Element);

  const ctx = document.getElementById("myChartHorizontalBarGraph").getContext("2d");

  console.log(ctx);

  new Chart(ctx, {
    type: "horizontalBar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "Frameworks Used in Modern Web Applications",
      },
      plugins: {
        datalabels: {
          anchor: "end",
          align: "top",
          color: "#000",
          font: {
            weight: "bold",
          },
          formatter: (value, context) => {
            const data = context.chart.data.datasets[0].data;
            const total = data.reduce((a, b) => Number(a) + Number(b), 0);
            if (total === 0) return "0%";
            const percentage = ((value / total) * 100).toFixed(1);
            return `${value} (${percentage}%)`;
          },
          plugins: [ChartDataLabels],
        },
      },
    },
  });
}

function pieChart() {
  const container = document.getElementById("heading");

  const h1Element = document.createElement("h1");

  h1Element.textContent = "Pie Chart";

  container.textContent = "";
  container.appendChild(h1Element);

  const ctx = document.getElementById("myChartPieChart").getContext("2d");


  new Chart(ctx, {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "Frameworks Used in Modern Web Applications",
      },
      plugins: {
        datalabels: {
          anchor: "end",
          align: "top",
          color: "#000",
          font: {
            weight: "bold",
          },
          formatter: (value, context) => {
            const data = context.chart.data.datasets[0].data;
            const total = data.reduce((a, b) => Number(a) + Number(b), 0);
            if (total === 0) return "0%";
            const percentage = ((value / total) * 100).toFixed(1);
            return `${value} (${percentage}%)`;
          },
          plugins: [ChartDataLabels],
        },
      },
    },
  });
}

function lineGraph() {
  const container = document.getElementById("heading");

  const h1Element = document.createElement("h1");

  h1Element.textContent = "Line Graph";

  container.textContent = "";
  container.appendChild(h1Element);

  const max = Math.max(...yValues);


  const ctx = document.getElementById("myChartLineGraph").getContext("2d");

  new Chart( ctx, {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      scales: {
        yAxes: [{ ticks: { min: 1, max: max+1 } }],
      },
      plugins: {
        datalabels: {
          anchor: "end",
          align: "top",
          color: "#000",
          font: {
            weight: "bold",
          },
          formatter: (value, context) => {
            const data = context.chart.data.datasets[0].data;
            const total = data.reduce((a, b) => Number(a) + Number(b), 0);
            if (total === 0) return "0%";
            const percentage = ((value / total) * 100).toFixed(1);
            return `${value} (${percentage}%)`;
          },
          plugins: [ChartDataLabels],
        },
      },
    },
  });
}
