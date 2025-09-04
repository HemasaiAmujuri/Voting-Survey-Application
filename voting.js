let currentChart = null;

function destroyChart() {
  if (currentChart !== null) {
    currentChart.destroy();
    currentChart = null;
  }
}

function submit() {
  let ele = document.getElementsByName("framework");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      let value = localStorage.getItem(ele[i].value);
      if(value == null){
        value = 0;
      }else{
        value = parseInt(value);
      }
      value++;
      localStorage.setItem(ele[i].value, value);
      ele[i].checked = false;
      alert("Data saved successfully");
    }
  }
}


function graph(h1, type) {
  destroyChart();

  const container = document.getElementById("heading");

  const h1Element = document.createElement("h1");
  h1Element.textContent = h1;

  container.textContent = "";
  container.appendChild(h1Element);

  const ctx = document.getElementById("myChart").getContext("2d");

  let react = localStorage.getItem("React") ?? 0;
  let angular = localStorage.getItem("Angular") ?? 0;
  let solid = localStorage.getItem("Solid.js") ?? 0;
  let svelte = localStorage.getItem("Svelte") ?? 0;
  let vue = localStorage.getItem("Vue") ?? 0;

  const xValues = ["React", "Angular", "Vue", "Svelte", "Solid"];
  const yValues = [react, angular, vue, svelte, solid];
  const barColors = ["red", "green", "blue", "orange", "brown"];

  const max = Math.max(...yValues);

  let chartOptions = {
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
  };

  if (type !== 'pie') {
    chartOptions.options.scales = {
      yAxes: [{ ticks: { min: 0, max: max + 1 } }],
    };
  }


  currentChart = new Chart(ctx, {
    type: type,
    ...chartOptions, 
  });
}