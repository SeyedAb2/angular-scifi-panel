import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  NgApexchartsModule,
} from 'ng-apexcharts';

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
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-buy-sell',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule,NgSelectModule, FormsModule],
  templateUrl: './buy-sell.component.html',
  styleUrl: './buy-sell.component.scss',
})
export class BuySellComponent {
  public chartOptions: Partial<ChartOptions> | any;
  constructor() {
    this.chartOptions = {
      series: [
        {
          type: 'line',
          name: 'Buy',
          data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
        },
        {
          name: 'Sell',
          type: 'bar',
          data: [65, 45, 75, 68, 85, 35, 62, 40, 40, 64, 50, 89],
        },
      ],
      chart: {
        height: 300,

        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
        offsetX: -15,
        fontWeight: 'bold',
      },
      plotOptions: {
        bar: {
          columnWidth: '25%',
          borderRadius: 2,
        },
      },
      stroke: {
        curve: 'smooth',
        width: ['1', '1'],
        dashArray: [3, 5],
      },
      grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3,
      },
      colors: ['rgba(0, 255, 190, 0.9)', 'rgba(69, 214, 91, 0.8)'],
      yaxis: {
        title: {
          text: 'Statistics',
          style: {
            color: '#adb5be',
            fontSize: '14px',
            fontFamily: 'IRANYekan',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-label',
          },
        },
      },
      xaxis: {
        type: 'month',
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        axisBorder: {
          show: true,
          color: 'rgba(119, 119, 142, 0.05)',
        },
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: 'rgba(119, 119, 142, 0.05)',
          width: 6,
        },
        labels: {
          rotate: -90,
        },
      },
    };
  }

  // Select 1
  selectedSimpleItem = 'ETH';
  simpleItems: any = [];
  // Select2
  selectedSimpleItem1 = 'USD';
  simpleItems1: any = [];
  // select3
  selectedSimpleItem2 = 'BTC';
  simpleItems2: any = [];
  // Select 4
  selectedSimpleItem3 = 'USD';
  simpleItems3: any = [];
  // Select5
  selectedSimpleItem4 = 'USD';
  simpleItems4: any = [];

  ngOnInit(): void {
    this.simpleItems = ['BTC', 'BSD', 'DASH', 'ETH', 'LTC', 'NEO'];
    this.simpleItems1 = ['USD', 'AED', 'ARS', 'AUD', 'AZN', 'BGN'];
    this.simpleItems2 = ['BTC', 'BSD', 'DASH', 'ETH', 'LTC', 'NEO'];
    this.simpleItems3 = ['USD', 'AED', 'ARS', 'AUD', 'AZN', 'BGN'];
    this.simpleItems4 = ['USD', 'AED', 'ARS', 'AUD', 'AZN', 'BGN'];
  }
}
