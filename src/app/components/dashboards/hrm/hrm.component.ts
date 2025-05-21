import {Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AttendanceData, EmployeeRoleData, JobAppliedData } from '../../../shared/data/dashboard_chartData/hrmcharts.data';
@Component({
  selector: 'app-hrm',
  standalone: true,
  imports: [RouterModule,SharedModule,NgApexchartsModule,NgbModule],
  templateUrl: './hrm.component.html',
  styleUrls: ['./hrm.component.scss']
})
export class HrmComponent  {
    public chartOptions =  AttendanceData;
    public chartOptions1 =  JobAppliedData;
    public chartOptions2 =  EmployeeRoleData;
}