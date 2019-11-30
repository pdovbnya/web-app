import React from "react";
import Highcharts from "highcharts";
import ReactDOM from "react-dom";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "HouseRF Salary, mln.",
          data: [150, 180, 200, 250, 400, 570, 860, 1000]
        }
      ]
    };
  }

  chartRenderer() {
    Highcharts.chart({
      chart: {
        type: "line",
        renderTo: "container"
      },

      title: {
        text: "HouseRF Salary, mln."
      },

      subtitle: {
        text: "Pavel Dovbnya, leading specialist"
      },

      yAxis: {
        title: {
          text: "Mln. RUB"
        }
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2019
        }
      },

      series: this.state.series,

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom"
              }
            }
          }
        ]
      }
    });
  }

  componentDidMount() {
    this.chartRenderer();
  }

  render() {
    return <div id="container"></div>;
  }
}

ReactDOM.render(<Chart />, document.getElementById("root"));
