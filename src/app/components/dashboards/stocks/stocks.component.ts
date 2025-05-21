import {  Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {  NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';

import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioData, TotalEarningData } from '../../../shared/data/dashboard_chartData/stockcharts.data';
import { sparkChartData1, sparkChartData2, sparkChartData3, sparkChartData4, sparkChartData5, sparkChartData6 } from '../../../shared/data/dashboardCharts.data';
@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [SharedModule,RouterModule,NgApexchartsModule,NgbNavModule,NgbModule],
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent  {
  public chartOptions =  TotalEarningData;
  public chartOptions1 =  PortfolioData;
  public chartOptions2 = sparkChartData1;
  public chartOptions3 = sparkChartData2;
  public chartOptions4 = sparkChartData3;
  public chartOptions5 = sparkChartData4;
  public chartOptions6 = sparkChartData5;
  public chartOptions7 = sparkChartData6;
}