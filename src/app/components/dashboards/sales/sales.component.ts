import {Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  NgApexchartsModule,
} from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StatisticsChartData,MaleUserData,FemaleUserData,RecentorderData,VisitorsData } from '../../../shared/data/dashboard_chartData/salechart.data';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [RouterModule,SharedModule,NgApexchartsModule,NgbModule],
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent  {

  public chartOptions = StatisticsChartData;
  public chartOptions1 = MaleUserData;
  public chartOptions2 = FemaleUserData;
  public chartOptions3 = RecentorderData;  
  public chartOptions4 = VisitorsData;
}