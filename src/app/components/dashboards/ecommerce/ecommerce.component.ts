import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import ApexCharts from 'apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
} from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgTiltModule} from '@geometricpanda/angular-tilt';
import { AnalysisData, ProfitData, RevenueData, SalesData, StatisticsData, ViewsData,WebTrafficData } from '../../../shared/data/dashboard_chartData/ecommercecharts.data';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, tileLayer } from 'leaflet';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [RouterModule, SharedModule, NgApexchartsModule, NgbModule,NgTiltModule,LeafletModule],
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss'],
})

export class EcommerceComponent  {
  public chartOptions = SalesData;
  public chartOptions1 = RevenueData;
  public chartOptions2 = ViewsData;
  public chartOptions3 = ProfitData
  public chartOptions4 = StatisticsData
  public chartOptions5 = AnalysisData

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

  chartOptions6: any = {
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

  //leaflet map
  public generateData(
    baseval: number,
    count: number,
    yrange: { min: number; max: number }
  ) {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
  center = latLng([46.879966, -121.726909]);
  options = {
    layers: [
      tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'Open Street Map',
      }),
    ],
    zoom: 5,
    center: latLng(this.center),
  };

  get width() {
    return window.innerWidth;
  }

  @HostListener('resize')
  onMapReady(map: any) {
    setTimeout(() => map.invalidateSize(), 1);
  }
}