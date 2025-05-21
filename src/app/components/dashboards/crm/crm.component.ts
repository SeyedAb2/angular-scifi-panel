import { Component, HostListener} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
} from 'ng-apexcharts';
import { CountryData, CustomersData, DealsData, LeadSourceData, PerformanceData, RatioData, RevenueData } from '../../../shared/data/dashboard_chartData/crmcharts.data';
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
  selector: 'app-crm',
  standalone: true,
  imports: [RouterModule,SharedModule,NgApexchartsModule,NgbModule,LeafletModule],
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.scss'
})
export class CrmComponent {
  public chartOptions = RevenueData;
  public chartOptions1 = CustomersData;
  public chartOptions2 = RatioData;
  public chartOptions3 =  DealsData;
  public chartOptions4 =  PerformanceData;
  public chartOptions5 =  CountryData;
  public chartOptions6 =  LeadSourceData;

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