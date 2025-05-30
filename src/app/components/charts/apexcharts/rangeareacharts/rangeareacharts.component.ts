import { Component, ViewChild } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexMarkers,
  ApexFill,
  ApexForecastDataPoints,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
  colors: string[];
  fill: ApexFill;
  forecastDataPoints: ApexForecastDataPoints;
  legend: ApexLegend;
};


@Component({
  selector: 'app-rangeareacharts',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule],
  templateUrl: './rangeareacharts.component.html',
  styleUrl: './rangeareacharts.component.scss'
})
export class RangeareachartsComponent {
  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>|any;
  public chartOptions1!: Partial<ChartOptions>|any;



  constructor(){
    this.chartOptions = {
      series: [
        {
          name: "New York Temperature",
          data: [
            {
              x: "Jan",
              y: [-2, 4]
            },
            {
              x: "Feb",
              y: [-1, 6]
            },
            {
              x: "Mar",
              y: [3, 10]
            },
            {
              x: "Apr",
              y: [8, 16]
            },
            {
              x: "May",
              y: [13, 22]
            },
            {
              x: "Jun",
              y: [18, 26]
            },
            {
              x: "Jul",
              y: [21, 29]
            },
            {
              x: "Aug",
              y: [21, 28]
            },
            {
              x: "Sep",
              y: [17, 24]
            },
            {
              x: "Oct",
              y: [11, 18]
            },
            {
              x: "Nov",
              y: [6, 12]
            },
            {
              x: "Dec",
              y: [1, 7]
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "rangeArea"
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "New York Temperature (all year round)"
      },
      colors: ["#00ffbe", "#45d65b"],
      markers: {
        hover: {
          sizeOffset: 5
        }
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        labels: {
          formatter: (val: string) => {
            return val + "°C";
          }
        }
      }
    };
    this.chartOptions1 = {
      series: [
        {
          type: "rangeArea",
          name: "Team B Range",

          data: [
            {
              x: "Jan",
              y: [1100, 1900]
            },
            {
              x: "Feb",
              y: [1200, 1800]
            },
            {
              x: "Mar",
              y: [900, 2900]
            },
            {
              x: "Apr",
              y: [1400, 2700]
            },
            {
              x: "May",
              y: [2600, 3900]
            },
            {
              x: "Jun",
              y: [500, 1700]
            },
            {
              x: "Jul",
              y: [1900, 2300]
            },
            {
              x: "Aug",
              y: [1000, 1500]
            }
          ]
        },

        {
          type: "rangeArea",
          name: "Team A Range",
          data: [
            {
              x: "Jan",
              y: [3100, 3400]
            },
            {
              x: "Feb",
              y: [4200, 5200]
            },
            {
              x: "Mar",
              y: [3900, 4900]
            },
            {
              x: "Apr",
              y: [3400, 3900]
            },
            {
              x: "May",
              y: [5100, 5900]
            },
            {
              x: "Jun",
              y: [5400, 6700]
            },
            {
              x: "Jul",
              y: [4300, 4600]
            },
            {
              x: "Aug",
              y: [2100, 2900]
            }
          ]
        },

        {
          type: "line",
          name: "Team B Median",
          data: [
            {
              x: "Jan",
              y: 1500
            },
            {
              x: "Feb",
              y: 1700
            },
            {
              x: "Mar",
              y: 1900
            },
            {
              x: "Apr",
              y: 2200
            },
            {
              x: "May",
              y: 3000
            },
            {
              x: "Jun",
              y: 1000
            },
            {
              x: "Jul",
              y: 2100
            },
            {
              x: "Aug",
              y: 1200
            },
            {
              x: "Sep",
              y: 1800
            },
            {
              x: "Oct",
              y: 2000
            }
          ]
        },
        {
          type: "line",
          name: "Team A Median",
          data: [
            {
              x: "Jan",
              y: 3300
            },
            {
              x: "Feb",
              y: 4900
            },
            {
              x: "Mar",
              y: 4300
            },
            {
              x: "Apr",
              y: 3700
            },
            {
              x: "May",
              y: 5500
            },
            {
              x: "Jun",
              y: 5900
            },
            {
              x: "Jul",
              y: 4500
            },
            {
              x: "Aug",
              y: 2400
            },
            {
              x: "Sep",
              y: 2100
            },
            {
              x: "Oct",
              y: 1500
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "rangeArea",
        animations: {
          speed: 500
        }
      },
      colors: ["#00ffbe", "#45d65b"],
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: [0.24, 0.24, 1, 1]
      },
      forecastDataPoints: {
        count: 2,
        dashArray: 4
      },
      stroke: {
        curve: "straight",
        width: [0, 0, 2, 2]
      },
      legend: {
        show: true,
        customLegendItems: ["Team B", "Team A"],
        inverseOrder: true
      },
      title: {
        text: "Range Area with Forecast Line (Combo)"
      },
      markers: {
        hover: {
          sizeOffset: 5
        }
      }
    };
  }

}
