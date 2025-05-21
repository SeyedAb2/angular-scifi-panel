import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { NgbAlert, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface Alert {
  type: string;
  message: string;
  icon?: string;
  image?: string;
  class?: string;
  message1?: string;
  message2?: string;
  message3?: string;
  class1?: string;
  class3?: string;
  bg?:string
}

export interface Alert1 {
  type: string;
  icon: string; // Make sure 'icon' property is defined
  message: string;
}
const ALERTS: Alert[] = [
  {
    type: 'success',
    message: 'This is an success alert',
  },
  {
    type: 'info',
    message: 'This is an info alert',
  },
  {
    type: 'warning',
    message: 'This is a warning alert',
  },
  {
    type: 'danger',
    message: 'This is a danger alert',
  },
  {
    type: 'primary',
    message: 'This is a primary alert',
  },
  {
    type: 'secondary',
    message: 'This is a secondary alert',
  },
  {
    type: 'light',
    message: 'This is a light alert',
  },
  {
    type: 'dark',
    message: 'This is a dark alert',
  },
];

const solidRoundedALERTS: Alert[] = [
  {
    type: 'solid-primary',
    message: '  A simple solid rounded primary alert—check it out!',
  },
  {
    type: 'solid-secondary',
    message: 'A simple solid rounded secondary alert—check it out!',
  },
  {
    type: 'solid-warning',
    message: '  A simple solid rounded warning alert—check it out!',
  },
  {
    type: 'solid-danger',
    message: 'A simple solid rounded danger alert—check it out!',
  },
];
const solidALERTS: Alert[] = [
  {
    type: 'solid-primary',
    message: ' A simple solid primary alert—check it out!',
    bg:''
  },
  {
    type: 'solid-secondary',
    message: 'A simple solid secondary alert—check it out!',
    bg:''
  },
  {
    type: 'solid-info',
    message: 'A simple solid info alert—check it out!',
    bg:''
  },
  {
    type: 'solid-warning',
    message: 'A simple solid warning alert—check it out!',
    bg:''
  },
  {
    type: 'solid-success',
    message: 'A simple solid success alert—check it out!',
    bg:''
  },
  {
    type: 'solid-danger',
    message: 'A simple solid danger alert—check it out!',
    bg:''
  },
  {
    type: 'solid-light',
    message: 'A simple solid light alert—check it out!',
    bg:'text-dark'
  },
  {
    type: 'solid-dark',
    message: 'A simple solid dark alert—check it out!',
    bg:'text-white'
  },
];
const outlineALERTS: Alert[] = [
  {
    type: 'outline-primary',
    message: 'A simple outline primary alert—check it out!',
    bg:''
  },
  {
    type: 'outline-secondary',
    message: 'A simple outline secondary alert—check it out!',
    bg:''
  },
  {
    type: 'outline-info',
    message: 'A simple outline info alert—check it out!',
    bg:''
  },
  {
    type: 'outline-warning',
    message: 'A simple outline warning alert—check it out!',
    bg:''
  },
  {
    type: 'outline-success',
    message: 'A simple outline success alert—check it out!',
    bg:''
  },
  {
    type: 'outline-danger',
    message: 'A simple outline danger alert—check it out!',
    bg:''
  },
  {
    type: 'outline-light',
    message: 'A simple outline light alert—check it out!',
    bg:'text-dark'
  },
  {
    type: 'outline-dark',
    message: 'A simple outline dark alert—check it out!',
    bg:'text-dark'
  },
];
const solidShadowsALERTS: Alert[] = [
  {
    type: 'solid-primary',
    message: 'A simple solid primary alert with normal shadow—check it out!',
  },
  {
    type: 'solid-primary',
    message: 'A simple solid primary alert with normal shadow—check it out!',
  },
  {
    type: 'solid-primary',
    message: 'A simple solid primary alert with normal shadow—check it out!',
  },
  {
    type: 'solid-secondary',
    message: 'A simple solid secondary alert with normal shadow—check it out!',
  },
  {
    type: 'solid-secondary',
    message: ' A simple solid secondary alert with normal shadow—check it out!',
  },
  {
    type: 'solid-secondary',
    message: 'A simple solid secondary alert with normal shadow—check it out!',
  },
];
const roundedOutlineALERTS: Alert[] = [
  {
    type: 'outline-primary',
    message: ' A simple outline primary alert—check it out!',
  },
  {
    type: 'outline-secondary',
    message: 'A simple outline secondary alert—check it out!',
  },
  {
    type: 'outline-info',
    message: 'A simple outline info alert—check it out!',
  },
  {
    type: 'outline-warning',
    message: 'A simple outline warning alert—check it out!',
  },
];
const roundeDefaultALERTS: Alert[] = [
  {
    type: 'primary',
    message: ' A simple rounded primary alert—check it out!',
  },
  {
    type: 'secondary',
    message: 'A simple rounded secondary alert—check it out!',
  },
  {
    type: 'info',
    message: 'A simple rounded info alert—check it out!',
  },
  {
    type: 'warning',
    message: 'A simple rounded warning alert—check it out!',
  },
];
const CustomeButtonALERTS: Alert[] = [
  {
    type: 'primary',
    message: ' A simple rounded primary alert—check it out!',
  },
  {
    type: 'secondary',
    message: 'A simple rounded secondary alert—check it out!',
  },
  {
    type: 'info',
    message: 'A simple rounded info alert—check it out!',
  },
  {
    type: 'warning',
    message: 'A simple rounded warning alert—check it out!',
  },
];
const CustomizedButtonALERTS: Alert1[] = [
  {
    type: 'outline-primary',
    message: 'A simple outline primary alert—check it out!',
    icon:'bi-exclamation-triangle'
    // svgclass:''
  },
  {
    type: 'outline-secondary',
    message: 'A simple outline secondary alert—check it out!',
    icon:'bi-exclamation-circle'
  },
  {
    type: 'outline-info',
    message: 'A simple outline info alert—check it out!',
    icon:'bi-exclamation-octagon'
  },
  {
    type: 'outline-warning',
    message: 'A simple outline warning alert—check it out!',
    icon:'bi-check-circle'
  },
];

import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [SharedModule, NgbModule,CommonModule],
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})

export class AlertsComponent {
  livealerts: any;
  i!: any;
  toggleClass = "line";
  
  alerts!: Alert[];
isCodeVisible: any;

  removeAlert(index: number) {
    this.livealerts.splice(index, 1);
  }



  showAlert() {
    this.livealerts.push('Nice, you triggered this alert message!');
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  closeAlerts(rowId: string) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
  }

  solidAlerts: Alert[] = solidALERTS;
  solidroundedAlerts: Alert[] = solidRoundedALERTS;
  outlineAlerts: Alert[] = outlineALERTS;
  solidShadowsAlerts: Alert[] = solidShadowsALERTS;
  roundedoutlineAlerts: Alert[] = roundedOutlineALERTS;
  roundeDefaultAlerts: Alert[] = roundeDefaultALERTS;
  CustomeButtonAlerts: Alert[] = CustomeButtonALERTS;
  CustomizedButtonAlerts: Alert1[] = CustomizedButtonALERTS;

  solidClose(index: number) {
    // Remove the alert from the array based on the index
    this.solidAlerts.splice(index, 1);
  }
  solidroundedClose(index: number) {
    // Remove the alert from the array based on the index
    this.solidroundedAlerts.splice(index, 1);
  }

  OutlineClose(index: number) {
    // Remove the alert from the array based on the index
    this.outlineAlerts.splice(index, 1);
  }
  solidShadowsAlertsClose(index: number) {
    // Remove the alert from the array based on the index
    this.solidShadowsAlerts.splice(index, 1);
  }
  roundedoutlineClose(index: number) {
    // Remove the alert from the array based on the index
    this.roundedoutlineAlerts.splice(index, 1);
  }
  roundeDefaultClose(index: number) {
    // Remove the alert from the array based on the index
    this.roundeDefaultAlerts.splice(index, 1);
  }
  CustomeButtonClose(index: number) {
    // Remove the alert from the array based on the index
    this.CustomeButtonAlerts.splice(index, 1);
  }
  customizedAlertclose(index: number) {
    // Remove the alert from the array based on the index
    this.CustomizedButtonAlerts.splice(index, 1);
  }

  close9(alert9: Alert) {
    this.imagesalerts.splice(this.imagesalerts.indexOf(alert9), 1);
  }
  close10(alert10: Alert) {
    this.sizeimgssalerts.splice(this.sizeimgssalerts.indexOf(alert10), 1);
  }
  close11(alert11: Alert) {
    this.contentsalerts.splice(this.contentsalerts.indexOf(alert11), 1);
  }

  removeRow(rowId: string) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
  }

  public isClosed = false;
  public isClosed1 = false;
  public isClosed2 = false;
  public isClosed3 = false;
  public isClosed4 = false;
  public isClosed5 = false;
  public isClosed6 = false;
  public isClosed7 = false;
  public isClosed8 = false;
  public isClosed9 = false;
  public isClosed10 = false;
  public isClosed11 = false;
  public isClosed12 = false;
  public isClosed13 = false;
  public isClosedA = false;
  public isClosedB = false;
  public isClosedC = false;
  public isClosedD = false;

  Closetoggle(item: any) {
    if (item == 'close') {
      this.isClosed = true;
    }
    if (item == 'close1') {
      this.isClosed1 = true;
    }
    if (item == 'close2') {
      this.isClosed2 = true;
    }
    if (item == 'close3') {
      this.isClosed3 = true;
    }
    if (item == 'close4') {
      this.isClosed4 = true;
    }
    if (item == 'close5') {
      this.isClosed5 = true;
    }
    if (item == 'close6') {
      this.isClosed6 = true;
    }
    if (item == 'close7') {
      this.isClosed7 = true;
    }
    if (item == 'close8') {
      this.isClosed8 = true;
    }
    if (item == 'close9') {
      this.isClosed9 = true;
    }
    if (item == 'close10') {
      this.isClosed10 = true;
    }
    if (item == 'close11') {
      this.isClosed11 = true;
    }
    if (item == 'close12') {
      this.isClosed12 = true;
    }
    if (item == 'A') {
      this.isClosedA = true;
    }
    if (item == 'B') {
      this.isClosedB = true;
    }
    if (item == 'C') {
      this.isClosedC = true;
    }
    if (item == 'D') {
      this.isClosedD = true;
    }
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }
  private _message$ = new Subject<string>();

  staticAlertClosed = false;
  successMessage = '';

  @ViewChild('staticAlert', { static: false }) staticAlert: NgbAlert | any;
  @ViewChild('selfClosingAlert', { static: false }) selfClosingAlert:
    | NgbAlert
    | any;

    imagesalerts: Alert[] = [
      {
        type: 'alert alert-img alert-primary alert-dismissible fase show rounded-pill flex-wrap my-2',
        message: ' A simple primary alert with image—check it out!',
        image: './assets/images/faces/3.jpg',
      },
      {
        type: 'alert alert-img alert-secondary alert-dismissible fase show rounded-pill flex-wrap my-2',
        message: ' A simple secondary alert with image—check it out!',
        image: './assets/images/faces/5.jpg',
      },
      {
        type: 'alert alert-img alert-warning alert-dismissible fase show rounded-pill flex-wrap my-2',
        message: 'A simple warning alert with image—check it out!',
        image: './assets/images/faces/8.jpg',
      },
      {
        type: 'alert alert-img alert-danger alert-dismissible fase show rounded-pill flex-wrap my-2',
        message: 'A simple danger alert with image—check it out!',
        image: './assets/images/faces/11.jpg',
      },
      {
        type: 'alert alert-img alert-info alert-dismissible fase show rounded-pill flex-wrap my-2',
        message: 'A simple info alert with image—check it out!',
        image: './assets/images/faces/13.jpg',
      },
      {
        type: 'alert alert-img alert-light alert-dismissible fase show rounded-pill flex-wrap my-2',
        message: 'A simple light alert with image—check it out!',
        image: './assets/images/faces/10.jpg',
      },
      {
        type: 'alert alert-img alert-dark alert-dismissible fase show rounded-pill flex-wrap my-2',
        message: ' A simple dark alert with image—check it out!',
        image: './assets/images/faces/15.jpg',
      },
    ];

    sizeimgssalerts: Alert[] = [
      {
        type: 'alert alert-img avatar-xs  alert-primary alert-dismissible fase show flex-wrap my-2',
        message: ' A simple primary alert with image—check it out!',
        image: './assets/images/faces/3.jpg',
        class: 'avatar avatar-xs me-3',
      },
      {
        type: 'alert alert-img alert-secondary alert-dismissible fase show flex-wrap my-2',
        message: ' A simple secondary alert with image—check it out!',
        image: './assets/images/faces/5.jpg',
        class: 'avatar avatar-sm me-3',
      },
      {
        type: 'alert alert-img alert-warning alert-dismissible fase show flex-wrap my-2',
        message: 'A simple warning alert with image—check it out!',
        image: './assets/images/faces/8.jpg',
        class: 'avatar  me-3',
      },
      {
        type: 'alert alert-img alert-danger alert-dismissible fase show flex-wrap my-2',
        message: 'A simple danger alert with image—check it out!',
        image: './assets/images/faces/11.jpg',
        class: 'avatar avatar-md me-3',
      },
      {
        type: 'alert alert-img alert-info alert-dismissible fase show flex-wrap my-2',
        message: 'A simple info alert with image—check it out!',
        image: './assets/images/faces/13.jpg',
        class: 'avatar avatar-lg me-3',
      },
  
      {
        type: 'alert alert-img alert-dark alert-dismissible fase show flex-wrap my-2',
        message: ' A simple dark alert with image—check it out!',
        image: './assets/images/faces/15.jpg',
        class: 'avatar avatar-xl me-3',
      },
    ];
    contentsalerts: Alert[] = [
      {
        type: 'alert alert-primary overflow-hidden p-0',
        message: ' Thank you for reporting this.!',
        class: 'p-3 bg-primary text-fixed-black d-flex justify-content-between',
      },
      {
        type: 'alert  alert-secondary overflow-hidden p-0 ',
        message: 'Thank you for reporting this.!',
        class: 'p-3 bg-secondary text-fixed-white d-flex justify-content-between',
      },
      {
        type: 'alert alert-success overflow-hidden p-0',
        message: 'Thank you for reporting this.!',
        class: 'p-3 bg-success text-fixed-white d-flex justify-content-between',
      },
      {
        type: 'alert alert-warning overflow-hidden p-0',
        message: 'Thank you for reporting this.!',
        class: 'p-3 bg-warning text-fixed-white d-flex justify-content-between',
      },
    ];

  constructor(private sanitizer: DomSanitizer) {
    // setTimeout(() => this.staticAlert.close(), 20000);
    this.reset();
    this.livealerts = [];

    this._message$
      .pipe(
        takeUntilDestroyed(),
        tap((message) => (this.successMessage = message)),
        debounceTime(5000)
      )
      .subscribe(() => this.selfClosingAlert?.close());
  }

  public changeSuccessMessage() {
    this._message$.next(`${new Date()} - Message successfully changed.`);
  }

  svgClose(alert7: Alert) {
    this.svgalerts.splice(this.svgalerts.indexOf(alert7), 1);
  }
  
  getTrustedHtml(val: string | null | undefined): SafeHtml {
    return val ? this.sanitizer.bypassSecurityTrustHtml(val) : '';
  }

  svgalerts: Alert[] = [
    {
      type: 'alert svg-primary alert-primary alert-dismissible fade show custom-alert-icon shadow-sm my-2',
      message: ' A customized primary alert with an icon',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem"fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>',
    },

    {
      type: 'alert svg-secondary alert-secondary alert-dismissible fade show custom-alert-icon shadow-sm my-2',
      message: 'A customized secondary alert with an icon',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>',
    },
    {
      type: 'alert svg-warning alert-warning alert-dismissible fade show custom-alert-icon shadow-sm my-2',
      message: 'A customized warning alert with an icon',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></svg>',
    },
    {
      type: ' alert svg-danger alert-danger alert-dismissible fade show custom-alert-icon shadow-sm my-2',
      message: 'A customized danger alert with an icon!',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></svg>',
    },
  ];
}
