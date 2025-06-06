import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  NgApexchartsModule,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-currency-exchange',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule,NgSelectModule,FormsModule],
  templateUrl: './currency-exchange.component.html',
  styleUrl: './currency-exchange.component.scss'
})
export class CurrencyExchangeComponent {
 // select1
 selectedSimpleItem = 'Bitcoin';
 simpleItems: any = [];
 // Select 2
 selectedSimpleItem1 = 'USD';
 simpleItems1: any = [];

 ngOnInit(): void {
   this.simpleItems = [
     'Bitcoin',
     'Cardano',
     'EOS',
     'Etherium',
     'Litecoin',
     'NEM',
   ];
   this.simpleItems1 = ['Dinar', 'Euro', 'Pound', 'Rial', 'Rupee', 'USD'];
 }

 // charts Start
 @ViewChild('chart') chart!: ChartComponent;
 public chartOptions: Partial<ChartOptions> | any;
 public chartOptions1: Partial<ChartOptions> | any;
 public chartOptions2: Partial<ChartOptions> | any;
 public chartOptions3: Partial<ChartOptions> | any;
 public chartOptions4: Partial<ChartOptions> | any;
 public chartOptions5: Partial<ChartOptions> | any;
 public chartOptions6: Partial<ChartOptions> | any;
 public chartOptions7: Partial<ChartOptions> | any;
 public chartOptions8: Partial<ChartOptions> | any;

 constructor() {
   this.chartOptions = {
     chart: {
       type: 'area',
       height: 60,
       sparkline: {
         enabled: true,
       },
       dropShadow: {
         enabled: true,
         enabledOnSeries: undefined,
         top: 0,
         left: 0,
         blur: 1,
         color: '#fff',
         opacity: 0.05,
       },
     },
     stroke: {
       show: true,
       curve: 'smooth',
       lineCap: 'butt',
       colors: undefined,
       width: 1.5,
       dashArray: 0,
     },
     fill: {
       gradient: {
         enabled: false,
       },
     },
     series: [
       {
         name: 'Value',
         data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
       },
     ],
     yaxis: {
       min: 0,
       show: false,
       axisBorder: {
         show: false,
       },
     },
     xaxis: {
       axisBorder: {
         show: false,
       },
     },

     colors: ["rgba(0, 255, 190,0.75)"],
     tooltip: {
       enabled: false,
     },
   };
   this.chartOptions1 = {
     chart: {
       type: "area",
       height: 60,
       sparkline: {
         enabled: true,
       },
       dropShadow: {
         enabled: true,
         enabledOnSeries: undefined,
         top: 0,
         left: 0,
         blur: 1,
         color: "#fff",
         opacity: 0.05,
       },
     },
     stroke: {
       show: true,
       curve: "smooth",
       lineCap: "butt",
       colors: undefined,
       width: 1.5,
       dashArray: 0,
     },
     fill: {
       gradient: {
         enabled: false,
       },
     },
     series: [
       {
         name: "Value",
         data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
       },
     ],
     yaxis: {
       min: 0,
       show: false,
       axisBorder: {
         show: false,
       },
     },
     xaxis: {
       axisBorder: {
         show: false,
       },
     },
  
     colors: ["rgba(106, 78, 237,0.75)"],
     tooltip: {
       enabled: false,
     },
   };
   this.chartOptions2={
     chart: {
       type: "area",
       height: 60,
       sparkline: {
         enabled: true,
       },
       dropShadow: {
         enabled: true,
         enabledOnSeries: undefined,
         top: 0,
         left: 0,
         blur: 1,
         color: "#fff",
         opacity: 0.05,
       },
     },
     stroke: {
       show: true,
       curve: "smooth",
       lineCap: "butt",
       colors: undefined,
       width: 1.5,
       dashArray: 0,
     },
     fill: {
       gradient: {
         enabled: false,
       },
     },
     series: [
       {
         name: "Value",
         data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
       },
     ],
     yaxis: {
       min: 0,
       show: false,
       axisBorder: {
         show: false,
       },
     },
     xaxis: {
       axisBorder: {
         show: false,
       },
     },
    
     colors: ["rgba(10, 145, 81,0.75)"],
     tooltip: {
       enabled: false,
     },
   }
   this.chartOptions3={
     chart: {
       type: "area",
       height: 60,
       sparkline: {
         enabled: true,
       },
       dropShadow: {
         enabled: true,
         enabledOnSeries: undefined,
         top: 0,
         left: 0,
         blur: 1,
         color: "#fff",
         opacity: 0.05,
       },
     },
     stroke: {
       show: true,
       curve: "smooth",
       lineCap: "butt",
       colors: undefined,
       width: 1.5,
       ltcArray: 0,
     },
     fill: {
       gradient: {
         enabled: false,
       },
     },
     series: [
       {
         name: "Value",
         data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
       },
     ],
     yaxis: {
       min: 0,
       show: false,
       axisBorder: {
         show: false,
       },
     },
     xaxis: {
       axisBorder: {
         show: false,
       },
     },
   
     colors: ["rgba(227, 192, 11, 0.75)"],
     tooltip: {
       enabled: false,
     },

   }
   this.chartOptions4={
     chart: {
       type: "area",
       height: 60,
       sparkline: {
         enabled: true,
       },
       dropShadow: {
         enabled: true,
         enabledOnSeries: undefined,
         top: 0,
         left: 0,
         blur: 1,
         color: "#fff",
         opacity: 0.05,
       },
     },
     stroke: {
       show: true,
       curve: "smooth",
       lineCap: "butt",
       colors: undefined,
       width: 1.5,
       ltcArray: 0,
     },
     fill: {
       gradient: {
         enabled: false,
       },
     },
     series: [
       {
         name: "Value",
         data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
       },
     ],
     yaxis: {
       min: 0,
       show: false,
       axisBorder: {
         show: false,
       },
     },
     xaxis: {
       axisBorder: {
         show: false,
       },
     },
     
     colors: ["rgba(252, 108, 133, 0.75)"],
     tooltip: {
       enabled: false,
     },

   }
   this.chartOptions5={
     chart: {
       type: "area",
       height: 60,
       sparkline: {
         enabled: true,
       },
       dropShadow: {
         enabled: true,
         enabledOnSeries: undefined,
         top: 0,
         left: 0,
         blur: 1,
         color: "#fff",
         opacity: 0.05,
       },
     },
     stroke: {
       show: true,
       curve: "smooth",
       lineCap: "butt",
       colors: undefined,
       width: 1.5,
       ltcArray: 0,
     },
     fill: {
       gradient: {
         enabled: false,
       },
     },
     series: [
       {
         name: "Value",
         data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
       },
     ],
     yaxis: {
       min: 0,
       show: false,
       axisBorder: {
         show: false,
       },
     },
     xaxis: {
       axisBorder: {
         show: false,
       },
     },
    
     colors: ["rgba(69, 214, 91, 0.75)"],
     tooltip: {
       enabled: false,
     },

     }
     this.chartOptions6={
       chart: {
         type: "area",
         height: 60,
         sparkline: {
           enabled: true,
         },
         dropShadow: {
           enabled: true,
           enabledOnSeries: undefined,
           top: 0,
           left: 0,
           blur: 1,
           color: "#fff",
           opacity: 0.05,
         },
       },
       stroke: {
         show: true,
         curve: "smooth",
         lineCap: "butt",
         colors: undefined,
         width: 1.5,
         ltcArray: 0,
       },
       fill: {
         gradient: {
           enabled: false,
         },
       },
       series: [
         {
           name: "Value",
           data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
         },
       ],
       yaxis: {
         min: 0,
         show: false,
         axisBorder: {
           show: false,
         },
       },
       xaxis: {
         axisBorder: {
           show: false,
         },
       },
     
       colors: ["rgba(237, 78, 131, 0.75)"],
       tooltip: {
         enabled: false,
       },
     }
     this.chartOptions7={
       chart: {
         type: "area",
         height: 60,
         sparkline: {
           enabled: true,
         },
         dropShadow: {
           enabled: true,
           enabledOnSeries: undefined,
           top: 0,
           left: 0,
           blur: 1,
           color: "#fff",
           opacity: 0.05,
         },
       },
       stroke: {
         show: true,
         curve: "smooth",
         lineCap: "butt",
         colors: undefined,
         width: 1.5,
         ltcArray: 0,
       },
       fill: {
         gradient: {
           enabled: false,
         },
       },
       series: [
         {
           name: "Value",
           data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
         },
       ],
       yaxis: {
         min: 0,
         show: false,
         axisBorder: {
           show: false,
         },
       },
       xaxis: {
         axisBorder: {
           show: false,
         },
       },
       colors: ["rgba(70, 178, 201, 0.75)"],
       tooltip: {
         enabled: false,
       },

     }
     this.chartOptions8={
      chart: {
        type: "area",
        height: 60,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 1,
          color: "#fff",
          opacity: 0.05,
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 1.5,
        ltcArray: 0,
      },
      fill: {
        gradient: {
          enabled: false,
        },
      },
      series: [
        {
          name: "Value",
          data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
      ],
      yaxis: {
        min: 0,
        show: false,
        axisBorder: {
          show: false,
        },
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
      },
      colors: ["rgba(0, 255, 190, 0.75)"],
      tooltip: {
        enabled: false,
      },

    }
 }
}
