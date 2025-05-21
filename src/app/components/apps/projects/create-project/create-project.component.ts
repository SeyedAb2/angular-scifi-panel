import { HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { SharedModule } from '../../../../shared/shared.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import * as FilePond from 'filepond';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FormsModule,DropzoneModule,NgbModule,AngularEditorModule,HttpClientModule,FlatpickrModule,FilePondModule],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent {

  
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

  basicDemoValue = 'Choose date and time';
  basicDemoValue1 = 'Choose date and time';

  htmlContent:string = ` <p>lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
  a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
  McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
  the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
  the cites of the word in classical literature, discovered the undoubtable source. Lorem
  Ipsum comes from sections 1.10.32 and 1.10.33.</p>
<p><br></p>
<ol>
  <li class="ql-size-normal">Conducting a comprehensive analysis of the existing website
      design.</li>
  <li class="">Collaborating with the UI/UX team to develop wireframes and mockups.</li>
  <li class="">Iteratively refining the design based on feedback../li>
  <li class="">Implementing the finalized design changes using HTML, CSS, and JavaScript.
  </li>
  <li class="">Testing the website across different devices and browsers.</li>
</ol>`;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...', 
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  public type: string = 'component';

  public disabled: boolean = false;

  constructor() {}

  public toggleType(): void {
    this.type = (this.type === 'component') ? 'directive' : 'component';
  }

  public toggleDisabled1(): void {
    this.disabled = !this.disabled;
  }

  public onUploadInit(args: any): void {
    // console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    // console.log('onUploadError:', args);
  }

  public onUploadSuccess(args: any): void {
    // console.log('onUploadSuccess:', args);
  }
 
  model!: NgbDateStruct;
  model1!: NgbDateStruct;

ngOnInit(): void { }

files2: File[] = [];
  OnSelect2(event: any) {
    this.files2.push(...event.addedFiles);
  }

  OnRemove2(event: any) {
    this.files2.splice(this.files2.indexOf(event), 1);
  }
  
  options = ['Angelina May', 'Kiara advain', 'Hercules Jhon', 'Mayor Kim', 'Alexa Biss', 'Kim Jong', 'Darren Sami', 'Elizabeth', 'Bear Gills', 'Reva Shaan'];
  showattributeName = [ 'Angelina May','Kiara advain','Hercules Jhon' ];
  MultipleAttribute = (item: any, selected: any) => {
    if (selected.country && item.country) {
      return item.country === selected.country;
    }
    if (item.name && selected.name) {
      return item.name === selected.name;
    }
    return false;
  };

  selectedCompanies =['Martketing', 'Sales', 'Development','Design','Research'];
  companies: any[] = [];
  addTagFn(name:any) {
    return { name: name, tag: true };
  }
}