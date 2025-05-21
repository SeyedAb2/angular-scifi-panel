import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import {  ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersData,SourceData,BrowserData,RevenueData,DeviceData } from '../../../shared/data/dashboard_chartData/analyticscharts.data';
import { PopulationChartData } from '../../../shared/data/dashboard_chartData/gammingcharts.data';
@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [RouterModule,SharedModule,NgApexchartsModule,NgbModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})

export class AnalyticsComponent {
  public chartOptions = UsersData;
  public chartOptions1 = SourceData;
  public chartOptions2 = BrowserData;
  public chartOptions4 = RevenueData;
  public chartOptions5 = DeviceData;

  @ViewChild('chart') chart!: ChartComponent;
  private intervalId: any;

  public getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public array: number[] = [8, 5, 6, 4, 3, 8, 5, 6, 4, 3, 8, 5, 6, 4, 3];

  constructor() {}

  ngAfterViewInit() {
    this.intervalId = setInterval(() => {
      this.array = Array.from({ length: 9 }, () => this.getRandomNumber(3, 8));
      this.chart.updateSeries([
        {
          name: 'population',
          data: this.array
        }
      ]);
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  chartOptions3: any = {
    series: [{
      name: 'population',
      data: this.array
    }],
    chart: {
      id: 'realtime',
      height: 300,
      type: 'bar',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 500
        }
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 4,
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      linecap: 'rounded'
    },
    colors: ["var(--primary-color)"],
    markers: {
      size: 0
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.5,
        inverseColors: false,
        gradientToColors: ["rgb(0, 227, 210)"],
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: false,
      }
    },
    legend: {
      show: false
    },
  };
  // public chartOptions14 : any = {
  //   series: [{
  //       data: this.array
  //   }],
  //   chart: {
  //       type: 'bar',
  //       height: 320,
  //       toolbar: {
  //           show: false
  //       },
  //       sparkline: {
  //           enabled: true
  //       },
  //   },
  //   plotOptions: {
  //       bar: {
  //          columnWidth: "20%",
  //           barHeight: '100%',
  //           borderRadius: 0
  //       },
  //   },
  //   dataLabels: {
  //       enabled: false,
  //   },
  //   stroke: {
  //       colors: ["#fff"],
  //       width: 0.2
  //   },
  //   labels: Array.apply(null).map(function (el, index) {
  //       return index + 1;
  //   }),
  //   xaxis: {
  //       labels: {
  //           show: true,
  //           style: {
  //               colors: "#8c9097",
  //               fontSize: '11px',
  //               fontWeight: 600,
  //               cssClass: 'apexcharts-xaxis-label',
  //           },
  //       }
  //   },
  //   colors: ["var(--primary-color)"],
  //   yaxis: {
  //       axisBorder: {
  //           show: false
  //       },
  //       axisTicks: {
  //           show: false
  //       },
  //       labels: {
  //           show: false
  //       },
  //       title: {
  //           style: {
  //               color: "#8c9097",
  //           }
  //       },
  //   },
  //   grid: {
  //       position: 'back'
  //   },
  //   title: {
  //       align: 'right',
  //       offsetY: 30,
  //       style: {
  //           fontSize: '13px',
  //           fontWeight: 'bold',
  //           color: '#8c9097'
  //       },
  //   },
  //   fill: {
  //       type: 'solid',
  //   },
  // };
  
  
  
}

