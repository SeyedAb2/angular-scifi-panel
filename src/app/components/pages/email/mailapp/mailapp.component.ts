import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { NgbModal, NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimplebarAngularModule } from 'simplebar-angular';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-mailapp',
  standalone: true,
  imports: [SharedModule,NgbModule,NgSelectModule,AngularEditorModule,ReactiveFormsModule,FormsModule,SimplebarAngularModule,HttpClientModule,NgbTooltipModule],
  templateUrl: './mailapp.component.html',
  styleUrl: './mailapp.component.scss'
})
export class MailappComponent {
  htmlContent:string = '';

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

  closeResult!: string;

	constructor(private modalService: NgbModal) { 
    if (window.innerWidth >= 1400) {
      document.querySelector('.total-mails')?.classList.add('d-block')
      document.querySelector('.mails-information')?.classList.add('d-block')
      document.querySelector('.mail-navigation')?.classList.add('d-block')
    }
  }
  openWindowCustomClass(content: any) {
		this.modalService.open(content, {  size: 'lg' });
	}
  
  selectedCars = [3];
  cars = [
      { id: 1, name: 'Jay@gmail.com' },
      { id: 2, name: 'Kimo@gmail.com' },
      { id: 3, name: 'Don@gmail.com' },
      { id: 4, name: 'kimo@gmail.com' },
  ];

  ngOnInit() {
    
  }

  toggleDisabled() {
      const car: any = this.cars[1];
      car.disabled = !car.disabled;
  }

  htmlContent1:string = ``;

  config1: AngularEditorConfig = {
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


  MailClick() {
    const totalMails = document.querySelector('.total-mails');
    const mailsInformation = document.querySelector('.mails-information');
  
    if (totalMails && mailsInformation) {
      if (totalMails.classList.contains('d-block')) {
        totalMails.classList.remove('d-block');
        mailsInformation.classList.add('d-block');
      } else {
        totalMails.classList.add('d-block');
        mailsInformation.classList.remove('d-block');
      }
    }
  }
  
  navigationClick() {
    const mailNavigation = document.querySelector('.mail-navigation');
    const totalMails = document.querySelector('.total-mails');
  
    if (mailNavigation && totalMails) {
      if (mailNavigation.classList.contains('d-block')) {
        mailNavigation.classList.remove('d-block');
        totalMails.classList.remove('d-none');
      } else {
        // mailNavigation.classList.add('d-none');
        // totalMails.classList.add('d-block');
      }
    }
  }
  
  closeClick() {
    const mailNavigation = document.querySelector('.mail-navigation');
    const totalMails = document.querySelector('.total-mails');
  
    if (mailNavigation && totalMails) {
      if (mailNavigation.classList.contains('d-block')) {
        mailNavigation.classList.add('d-block');
        totalMails.classList.add('d-none');
      } else {
        mailNavigation.classList.add('d-block');
        totalMails.classList.remove('d-none');
      }
    }
  }
  
  informationClick() {
    const totalMails = document.querySelector('.total-mails');
    const mailsInformation = document.querySelector('.mails-information');
  
    if (totalMails && mailsInformation) {
      if (window.innerWidth <= 1400) {
        if (totalMails.classList.contains('')) {
          totalMails.classList.remove('d-block');
          mailsInformation.classList.add('d-block');
        } else {
          totalMails.classList.add('d-none');
          mailsInformation.classList.add('d-block');
        }
      } else {
        totalMails.classList.remove('d-block');
        mailsInformation.classList.remove('d-none');
      }
    }
  }
  
  mailsinformationclose() {
    const mailsInformation = document.querySelector('.mails-information');
    const totalMails = document.querySelector('.total-mails');
  
    if (mailsInformation && totalMails) {
      if (mailsInformation.classList.contains('')) {
        mailsInformation.classList.add('d-none');
        totalMails.classList.remove('d-none');
      } else {
        mailsInformation.classList.add('d-none');
        totalMails.classList.remove('d-none');
      }
    }
  }
  
}
