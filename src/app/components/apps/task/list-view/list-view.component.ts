import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgSelectModule } from '@ng-select/ng-select';
import { interval } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  annotations: ApexAnnotations;
  colors: any;
  toolbar: any;
  legend: ApexLegend;
};

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [SharedModule,NgbModule,NgApexchartsModule,NgbModule,FormsModule,FlatpickrModule,NgSelectModule],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent {

  AssignedValue = ''
  DuaDateValue = ''
 
  public chartOptions!: Partial<ChartOptions> | any;
  constructor(private modalService: NgbModal,){
    this.chartOptions = {
      series: [{
        data: [400, 540, 580, 690 ]
      }],
        chart: {
        type: 'bar',
        height: 200,
        toolbar: {
            show: false,
        }
      },
      colors: ['#00ffbe', '#ebf748', '#48f768', '#00e3d2'],
      plotOptions: {
        bar: {
          borderRadius: 1,
          horizontal: true,
          barHeight: '40%',
          dataLabels: {
            position: 'top'
          },
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['New', 'Pending', 'Completed', 'Ongoing'],
      },
    };
  }

  
 creattaskmodal(content: any) {
  this.modalService.open(content, { windowClass: 'dark-modal'  });
  
}
  ListData:any[] = [
    {
      Task: 'Redesign E-commerce Pages.',
      TaskID: 'TSK - 31',
      AssignedDate: '18-12-2023',
      Status: 'New',
      statusBg:'primary',
      DueDate: ' 02-01-2024',
      Priority: 'Medium',
      prioritybg:'primary',
      assignedTo: [
        { img: './assets/images/faces/2.jpg'},
        { img: './assets/images/faces/8.jpg' },
        { img: './assets/images/faces/2.jpg' },
      ],
      restimg:'+2'
    },
    {
      Task: 'Implementation of New Pages.',
      TaskID: 'TSK - 34',
      AssignedDate: '06-12-2023',
      Status: 'Inprogress',
      statusBg:'secondary',
      DueDate: ' 12-01-2024',
      Priority: 'high',
      prioritybg:'danger',
      assignedTo: [
        { img: './assets/images/faces/11.jpg' },
        { img: './assets/images/faces/12.jpg' },
      ],
      restimg:'+4'
    },
    {
      Task: 'Redesign E-commerce Pages.',
      TaskID: 'TSK - 51',
      AssignedDate: '12-12-2023',
      Status: 'Pending',
      statusBg:'warning',
      DueDate: ' 02-01-2024',
      Priority: 'Low',
      prioritybg:'success',
      assignedTo: [
        { img: './assets/images/faces/9.jpg'},
        { img: './assets/images/faces/5.jpg' },
        { img: './assets/images/faces/13.jpg' },
      ],
      restimg:'+2'
    },
    {
      Task: 'Design and update project',
      TaskID: 'TSK - 44',
      AssignedDate: '19-12-2023',
      Status: 'Completed',
      statusBg:'primary',
      DueDate: ' 06-01-2024',
      Priority: 'Low',
      prioritybg:'success',
      assignedTo: [
        { img: './assets/images/faces/2.jpg'},
        { img: './assets/images/faces/8.jpg' },
        { img: './assets/images/faces/2.jpg' },
      ],
      restimg:'+3'
    },
    {
      Task: 'Integrate Wireframes for New Project',
      TaskID: 'TSK - 56',
      AssignedDate: '08-12-2023',
      Status: 'Inprogress',
      statusBg:'secondary',
      DueDate: ' 19-01-2024',
      Priority: 'Medium',
      prioritybg:'secondary',
      assignedTo: [
        { img: './assets/images/faces/10.jpg'},
        { img: './assets/images/faces/15.jpg' },
      ],
      restimg:'+3'
    },
    {
      Task: 'Adding policies in main Landing page',
      TaskID: 'TSK - 37',
      AssignedDate: '18-12-2023',
      Status: 'New',
      statusBg:'primary',
      DueDate: ' 12-12-2023',
      Priority: 'High',
      prioritybg:'danger',
      assignedTo: [
        { img: './assets/images/faces/12.jpg'},
      ],
      restimg:'+1'
    },
    {
      Task: 'Implemetation of Reponsive Tables	',
      TaskID: 'TSK - 53',
      AssignedDate: '20-12-2023',
      Status: 'Completed',
      statusBg:'success',
      DueDate: ' 12-12-2023',
      Priority: 'Low',
      prioritybg:'success',
      assignedTo: [
        { img: './assets/images/faces/1.jpg'},
        { img: './assets/images/faces/11.jpg' },
        { img: './assets/images/faces/10.jpg' },
      ],
      restimg:'+1'
    },
    {
      Task: 'Plugin Implementations',
      TaskID: 'TSK - 40',
      AssignedDate: '30-12-2023',
      Status: 'Pending',
      statusBg:'warning',
      DueDate: ' 02-01-2024',
      Priority: 'High',
      prioritybg:'danger',
      assignedTo: [
        { img: './assets/images/faces/3.jpg'},
        { img: './assets/images/faces/9.jpg' },
      ],
      restimg:'+2'
    },
    {
      Task: 'Bug fixing Functinality',
      TaskID: 'TSK - 46',
      AssignedDate: '16-12-2023',
      Status: 'Completed',
      statusBg:'success',
      DueDate: '05-01-2024',
      Priority: 'Medium',
      prioritybg:'secondary',
      assignedTo: [
        { img: './assets/images/faces/9.jpg'},
        { img: './assets/images/faces/14.jpg' },
        { img: './assets/images/faces/11.jpg' },
        { img: './assets/images/faces/10.jpg' },
      ],
      restimg:'+1'
    },
    {
      Task: 'Designing Sales Dashboard',
      TaskID: 'TSK - 32',
      AssignedDate: '08-12-2023	',
      Status: 'Inprogress',
      statusBg:'success',
      DueDate: ' 15-01-2024',
      Priority: 'Low',
      prioritybg:'success',
      assignedTo: [
        { img: './assets/images/faces/12.jpg'},
        { img: './assets/images/faces/6.jpg' },
      ],
      restimg:'+4'
    },
   
  ];

  selectAllTasks(event: any) {
    const checkbox = event.target as HTMLInputElement;
    this.ListData.forEach(data => data.selected = checkbox.checked);
}

// Function to check if all tasks are selected
isAllTasksSelected() {
    return this.ListData.every(data => data.selected);
}

  DeleteClick(ProductsData: any) {
    let filterData = this.ListData.filter((ele) => {
      return ele.Task != ProductsData;
    });
    this.ListData = filterData;
  }


  public counter1 = 1;
  source = interval(0.2);
  subscribe = this.source.subscribe(() => {
    this.counter1++;
    if (this.counter1 == 549) {
      this.subscribe.unsubscribe();
    }
  });
  public counter2 = 1;
  source2 = interval(0.2);
  subscribe2 = this.source2.subscribe(() => {
    this.counter2++;
    if (this.counter2 == 451) {
      this.subscribe2.unsubscribe();
    }
  });
  public counter3 = 1;
  source3 = interval(0.2);
  subscribe3 = this.source3.subscribe(() => {
    this.counter3++;
    if (this.counter3 == 124) {
      this.subscribe3.unsubscribe();
    }
  });
  public counter4 = 1;
  source4 = interval(0.2);
  subscribe4 = this.source4.subscribe(() => {
    this.counter4++;
    if (this.counter4 == 458) {
      this.subscribe4.unsubscribe();
    }
  });

  
  
}
