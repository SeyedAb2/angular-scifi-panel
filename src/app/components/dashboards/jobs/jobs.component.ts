import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import {  NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobStatisticsData, PerformanceData } from '../../../shared/data/dashboard_chartData/jobscharts.data';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [RouterModule,SharedModule,NgApexchartsModule,SimplebarAngularModule,NgbModule],
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {
  public chartOptions =  PerformanceData;
  public chartOptions1 =  JobStatisticsData;
}