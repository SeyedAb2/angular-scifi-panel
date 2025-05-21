import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
import { ChartOptions } from 'chart.js';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectOverviewData, ProjectsTimelineData } from '../../../shared/data/dashboard_chartData/projectcharts.data';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule,SharedModule,NgApexchartsModule,NgbModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent  {
  public chartOptions =  ProjectOverviewData;
  // public chartOptions1 =  ProjectsTimelineData;
 
   chartOptions1:any = {
    series: [
        {
            data: [
                {
                    x: 'Design Phase',
                    y: [
                        new Date('2024-01-20').getTime(),
                        new Date('2024-02-08').getTime()
                    ],
                    fillColor: 'var(--primary02)'
                },
                {
                    x: 'Development',
                    y: [
                        new Date('2024-02-01').getTime(),
                        new Date('2024-02-15').getTime()
                    ],
                    fillColor: 'rgba(72, 247, 104, 0.3)'
                },
                {
                    x: 'Testing',
                    y: [
                        new Date('2024-02-15').getTime(),
                        new Date('2024-02-24').getTime()
                    ],
                    fillColor: 'rgba(235, 247, 72, 0.3)'
                },
                {
                    x: 'UAT',
                    y: [
                        new Date('2024-02-20').getTime(),
                        new Date('2024-03-06').getTime()
                    ],
                    fillColor: 'rgba(0, 227, 210, 0.3)'
                },
                {
                    x: 'Deployment',
                    y: [
                        new Date('2024-03-08').getTime(),
                        new Date('2024-03-19').getTime()
                    ],
                    fillColor: 'rgba(255, 74, 74, 0.3)'
                },
                {
                    x: 'Project closure',
                    y: [
                        new Date('2024-03-15').getTime(),
                        new Date('2024-03-28').getTime()
                    ],
                    fillColor: 'rgba(72, 247, 238, 0.3)'
                }
            ]
        }
    ],
    chart: {
        height: 394,
        type: 'rangeBar'
    },
    plotOptions: {
        bar: {
            horizontal: true,
            distributed: true,
            dataLabels: {
                hideOverflowingLabels: false
            },
            barWidth: 20,
            barHeight: 20,
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val: any, opts: { w: { globals: { labels: { [x: string]: any; }; }; }; dataPointIndex: string | number; }) {
            var label = opts.w.globals.labels[opts.dataPointIndex]
            return label
        },
        style: {
            colors: ['#f3f4f5', '#fff']
        }
    },
    xaxis: {
        type: 'datetime',
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    yaxis: {
        show: false
    },
    grid: {
        borderColor: '#f2f5f71a',
    }
};
}