import {Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseCategoriesData, LearningAnalysisData,CoursesProgressData, PayoutsData } from '../../../shared/data/dashboard_chartData/coursescharts.data';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterModule,SharedModule,NgApexchartsModule,NgbModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
    public chartOptions = LearningAnalysisData;
    public chartOptions1 = CourseCategoriesData;
    public chartOptions2 = CoursesProgressData;
    public chartOptions3 = PayoutsData;
}