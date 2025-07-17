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

function displayGraph() {
  let ele = document.getElementsByName("chart");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      const value = ele[i].value;
      alert(`Thank You for choosing ${value}`);

      let react = localStorage.getItem("React");
      let angular = localStorage.getItem("Angular");
      let solid = localStorage.getItem("Solid.js");
      let svelte = localStorage.getItem("Svelte");
      let vue = localStorage.getItem("Vue");

      const xValues = ["React", "Angular", "Vue", "Svelte", "Solid"];
      const yValues = [react, angular, vue, svelte, solid];
      const barColors = ["red", "green", "blue", "orange", "brown"];

      if (value === "Bar Graph") {
        const container = document.getElementById("heading");

        const h1Element = document.createElement("h1");

        h1Element.textContent = "Bar Graph";

        container.textContent = "";
        container.appendChild(h1Element);

        new Chart("myChart", {
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
          },
        });
      } else if (value === "Pie Chart") {
        const container = document.getElementById("heading");

        const h1Element = document.createElement("h1");

        h1Element.textContent = "Pie Chart";

        container.textContent = "";
        container.appendChild(h1Element);
        new Chart("myChart", {
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
          },
        });
      } else if (value === "Line Graph") {
        const container = document.getElementById("heading");

        const h1Element = document.createElement("h1");

        h1Element.textContent = "Line Graph";

        container.textContent = "";
        container.appendChild(h1Element);

        const max = Math.max(...yValues);
        
        new Chart("myChart", {
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
              yAxes: [{ ticks: { min: 1, max: max  } }],
            },
          },
        });
      }
    }
  }
}
