import React from 'react';

const Highcharts = window.Highcharts
Highcharts.setOptions({
  lang: {
        loading: 'Подождите...',
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        shortMonths: ['янв', 'фев', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сент', 'окт', 'нояб', 'дек'],
        resetZoom: 'Отменить выделение'
        }
  }
);

let todayYear = new Date().getFullYear()
let todayMonth = new Date().getMonth()

class MacroChart extends React.Component {

    chartRenderer() {
      this.instance = Highcharts.chart({
        chart: {
          type: 'line',
          renderTo: 'container',
          zoomType: 'xy',
          selectionMarkerFill: 'rgba(131, 173, 75, 0.12)',
          plotBorderWidth: 1,
          marginLeft: 27,
        },

        series: [{
          name: '',
          data: this.props.data,
          color: 'rgba(47, 68, 78, 0.7)',
          marker: {
            lineColor: 'rgba(47, 68, 78, 0.7)',
            fillColor: 'rgba(166, 233, 78, 0.945)',
            radius: 2,
            enabled: false,
          },
          animation: {
            duration: 200,
          },
        }],

        title: {
          text: '',
        },

        xAxis: { 
            type: 'datetime' ,
            gridLineDashStyle: 'dash', 
            gridLineWidth: 1,
            plotBands: [{ 
              from: 1299999900000,
              to: new Date(todayYear, todayMonth).valueOf(),
              color: 'rgba(47, 68, 78, 0.06)',
          }]
        },

        yAxis: { 
          title: '',
          allowDecimals: false,
          gridLineDashStyle: 'dash',
          labels: {
            x: -8,
          }
        },

        legend: {
          enabled: false,
        },

        credits: {
          enabled: false,
        },

        tooltip: {
          enabled: true,
          valueDecimals: 2,
          useHTML: true,
          headerFormat: '<span style="font-size: 11px">{point.key}</span><br/>',
          pointFormat: '<span style="font-size: 12px; font-weight: 1000">{point.y}</span>',
        },
      });
    }

    componentDidMount() {
        this.chartRenderer();
      }

    componentDidUpdate() {
      this.chartRenderer();
    }
    
    render() {
        return <div id="container"></div>;
      }
    }

export default MacroChart;