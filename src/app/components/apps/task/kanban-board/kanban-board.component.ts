import { Component, ViewChild } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { SharedModule } from '../../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrModule } from 'angularx-flatpickr';
import { FormsModule } from '@angular/forms';
import { SimplebarAngularModule } from 'simplebar-angular';
import { DragulaModule, DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [FilePondModule,SharedModule,NgSelectModule,FlatpickrModule,FormsModule,NgbModule,SimplebarAngularModule,DragulaModule],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.scss'
})
export class KanbanBoardComponent {
    
TargetDateValue = ''

    constructor(private dragulaService: DragulaService,private modalService: NgbModal) {
        // use these if you want
    
        this.dragulaService.createGroup('kanban', {
          // ...
        });
    
        this.dragulaService.dropModel('kanban').subscribe((args) => {
          console.log(args);
        });
      }
      
      openWindowCustomClass(content: any) {
        this.modalService.open(content, { centered: true  });
        
      }
      openWindowCustomClass1(content1: any) {
        this.modalService.open(content1, { centered: true  });
        
      }

      selectedSimpleItem = 'Sort By';
  simpleItems: any = [];
  ngOnInit(): void {
    this.simpleItems = ['Sort By', 'A-Z', 'Date Add', 'Newest', 'Type'];
  }

  @ViewChild("myPond") myPond!: FilePondComponent;

  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: "Drop files here to Upload...",
  };
  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Drop files here to Upload...",
  };

  pondFiles: FilePond.FilePondOptions["files"] = [
    // {
    //   source: "./assets/images/landing/3.jpeg",
    //   options: {
    //     type: "local",
    //   },
    // },
  ];

  pondHandleInit() {
    // console.log("FilePond has initialised", this.myPond);
  }

  pondHandleAddFile(event: any) {
    // console.log("A file was added", event);
  }

  pondHandleActivateFile(event: any) {
    // console.log("A file was activated", event);
  }

   
}