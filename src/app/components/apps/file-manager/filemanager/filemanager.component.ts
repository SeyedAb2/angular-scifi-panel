import { Component, ElementRef, HostListener, Renderer2, TemplateRef } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbModal, NgbModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filemanager',
  standalone: true,
  imports: [SharedModule, SimplebarAngularModule, NgbModule],
  templateUrl: './filemanager.component.html',
  styleUrl: './filemanager.component.scss'
})
export class FilemanagerComponent {
  closeResult!: string;

	constructor(private modalService: NgbModal,private offcanvasService: NgbOffcanvas) {}

	openWindowCustomClass(content: any) {
		this.modalService.open(content, { windowClass: 'dark-modal',centered: true });
	}
  openWindowCustomClass1(content1: any) {
		this.modalService.open(content1, { windowClass: 'dark-modal',centered: true });
	}

  removedetails1() {
    document.querySelector('.selected-file-details ')?.classList.remove('open');
  }
  
  removeclick(){
    document.querySelector('.file-manager-folders')?.classList.remove('open');
    document.querySelector('.file-manager-navigation')?.classList.remove('close');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.myFileClick();
    this.detailsClick(); 
  }

  myFileClick() {
    const fileManagerFolders = document.querySelector('.file-manager-folders');
    const fileManagerNavigation = document.querySelector('.file-manager-navigation');

    if (window.innerWidth <= 992) {
      if (fileManagerFolders) {
        fileManagerFolders.classList.add('open');
      }
      if (fileManagerNavigation) {
        fileManagerNavigation.classList.add('close');
      }
    } else {
      if (fileManagerFolders) {
        fileManagerFolders.classList.remove('open');
      }
      if (fileManagerNavigation) {
        fileManagerNavigation.classList.remove('close');
      }
    }
  }

  detailsClick() {
    const selectedFileDetails = document.querySelector('.selected-file-details');

    if (window.innerWidth <= 1180 && selectedFileDetails) {
      selectedFileDetails.classList.add('open');
    } else {
      // Close the details when the window width is greater than 992
      if (selectedFileDetails) {
        selectedFileDetails.classList.remove('open');
      }
  }
  }
  tableData = [
    {
      src:'./assets/images/media/file-manager/1.png',
      name:'VID-5471511100-AY51.mp4',
      Category:'Videos',
      Size:'68MB',
      Date :'21,Sep 2023'
    },
    {
      src:'./assets/images/media/file-manager/1.png',
      name:'IMG-414589992226-HJ45.jpeg',
      Category:'Images',
      Size:'2.45MB',
      Date :'05,Oct 2023'
    },
    {
      src:'./assets/images/media/file-manager/1.png',
      name:'com4888-2024.zip',
      Category:'Archives',
      Size:'511KB',
      Date :'03,Jan 2024'
    },
    {
      src:'./assets/images/media/file-manager/1.png',
      name:'AUD-45841-2024.mp3',
      Category:'Archives',
      Size:'485KB',
      Date :'09,Jan 2024'
    },
    {
      src:'./assets/images/media/file-manager/1.png',
      name:'Document-file-list.pdf',
      Category:'Documents',
      Size:'2.54MB',
      Date :'11,Dec 2024'
    }
  ]

  openRight(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
}