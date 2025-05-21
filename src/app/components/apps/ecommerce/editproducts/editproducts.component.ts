import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import { FilePondComponent,FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { SharedModule } from '../../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';

import {
  AngularEditorConfig,
  AngularEditorModule,
} from '@kolkov/angular-editor';
import { NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from '@angular/common/http';
import { FlatpickrModule } from 'angularx-flatpickr';

@Component({
  selector: 'app-editproducts',
  standalone: true,
  imports: [
    SharedModule,
    FilePondModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    NgxDropzoneModule,
    AngularEditorModule,
    HttpClientModule,
    FlatpickrModule
],
  providers: [],

  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.scss'],
})
export class EditproductsComponent {

  basicDemoValue = '2017-01-01';
  timePicker: Date | null = null;

  //ngx-dropzon
  files2: File[] = [];
  OnSelect2(event: any) {
    this.files2.push(...event.addedFiles);
  }

  OnRemove2(event: any) {
    this.files2.splice(this.files2.indexOf(event), 1);
  }
  files3: File[] = [];
  OnSelect3(event: any) {
    this.files3.push(...event.addedFiles);
  }

  OnRemove3(event: any) {
    this.files2.splice(this.files3.indexOf(event), 1);
  }

  public type: string = 'component';

  public disabled: boolean = false;

  constructor() {}

  public toggleType(): void {
    this.type = this.type === 'component' ? 'directive' : 'component';
  }

  public toggleDisabled1(): void {
    this.disabled = !this.disabled;
  }

  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    console.log('onUploadError:', args);
  }

  public onUploadSuccess(args: any): void {
    console.log('onUploadSuccess:', args);
  }

  //select 1
  selectedSimpleItem = 'select';
  simpleItems: any = [];
  //select 2
  selectedSimpleItem1 = 'select';
  simpleItems1: any = [];
  //select 3
  selectedSimpleItem2 = 'select';
  simpleItems2: any = [];
  //select 4
  selectedSimpleItem3 = 'select';
  simpleItems3: any = [];
  //select 5
  selectedSimpleItem5 = 'select';
  simpleItems5: any = [];

  //select 7
  producttags = ['Plain'];
  tags = [
    { id: 1, name: 'Plain', },
    { id: 2, name: 'Relaxed' },
    { id: 3, name: 'Washed' },
    { id: 4, name: 'solid' },
  ];

  selectedcolortag = ['White'];
  colortag = [
    { id: 1, name: 'Red', },
    { id: 2, name: 'Pink' },
    { id: 3, name: 'Yellow' },
    { id: 4, name: 'Orange' },
    { id: 5, name: 'Green' },
  ];

  //select 8
  selectedSimpleItem6 = 'select';
  simpleItems6: any = [];
  ngOnInit() {
    this.simpleItems = [
      'Jewellery',
      'Ethnic & Festive',
      'Grooming',
      'Accesories',
      'Footwear',
      'Category',
      'Clothing',
    ];
    this.simpleItems1 = ['Male', 'All', 'Female', 'Others'];
    this.simpleItems2 = ['Small', 'Medium', 'Extra Large', 'Large'];
    this.simpleItems3 = ['Armani', 'Lacoste', 'Arrrabi', 'Mufti'];
    this.simpleItems5 = ['Publish', 'Scheduled'];
    this.simpleItems6 = ['In Stock', 'Out Of Stock'];
  }
  htmlContent: string = ` <ul>
  <li>Care Instructions: Wipe clean with a soft, dry cloth.</li>
  <li>Neckband Type: Equipped with a comfortable neckband design.</li>
  <li>Fit Type: Designed for a secure and comfortable fit.</li>
  <li>Long Sleeves: The pullover is designed with Long Sleeves.</li>
  <li>Playtime: Enjoy extended usage with long-lasting battery life.</li>
  <li>Sound Quality: Delivers exceptional audio quality for an immersive experience.</li>
  <li>Design: Sleek and modern design with adjustable components for a customized fit.</li>
</ul>`;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };

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
