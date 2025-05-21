import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Renderer2, TemplateRef } from '@angular/core';
import { CarouselModule, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { fromEvent } from 'rxjs';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SwitcherService } from '../../../shared/services/switcher.service';
import { RouterModule } from '@angular/router';
import { LandingSwitcherComponent } from '../../../shared/components/landing-switcher/landing-switcher.component';

@Component({
  selector: 'app-jobs-landing',
  standalone: true,
  imports: [CommonModule,SharedModule,CarouselModule,FormsModule,ReactiveFormsModule,RouterModule,NgbModule],
  templateUrl: './jobs-landing.component.html',
  styleUrls: ['./jobs-landing.component.scss']
})
export class JobsLandingComponent {
  panels = [
    'How do I integrate the template into my project?',
    'Can I customize the appearance of the admin template?',
    'How frequently is the template updated?',
    ' Can I upgrade or downgrade my subscription plan?',
  ];
   
  body: HTMLBodyElement | null;
  constructor(
    @Inject(DOCUMENT) private document: Document,private elementRef: ElementRef,private SwitcherService:SwitcherService,
    private renderer: Renderer2,  private el: ElementRef, private offcanvasService: NgbOffcanvas
  ) {  
    this.body = document.querySelector('body');
      const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
  const bodyElement = document.body;
  this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
  this.renderer.removeClass(bodyElement, 'sidebar-mini');
  this.renderer.removeClass(bodyElement, 'authentication-background');
  this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'horizontal');
  this.renderer.setAttribute(htmlElement, 'data-nav-style', 'menu-click');
  this.renderer.removeAttribute(htmlElement, 'data-vertical-style');
}
 
  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'landing-body');
    let html = document.documentElement;
     this.renderer.setAttribute(html, 'data-nav-style', 'menu-click');
      this.renderer.setAttribute(html, 'data-theme-mode', 'dark');
     this.renderer.removeAttribute(html, 'style');
    
     if(html.getAttribute('dir') == 'rtl'){
      html.removeAttribute('data-vertical-style');
     } else{
     }
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'landing-body');
    let html = document.documentElement;
    html?.setAttribute('data-nav-layout', 'vertical');
    html.setAttribute('data-vertical-style','detached');
    html?.removeAttribute('data-nav-style');
  }

  toggleSidebar() {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    const currentToggleValue = htmlElement.getAttribute('data-toggled');
  
    if (currentToggleValue !== 'open') {
      this.renderer.setAttribute(htmlElement, 'data-toggled', 'open');
    } else {
      this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
    }
  }
  
   //Right Offcanvas..//
   switcherToggled(){
    this.offcanvasService.open(LandingSwitcherComponent, { position: 'end' });
  }

expande = false;
expande1 = false;
expande2 = false;
toggleExpand(): void {
  this.expande = !this.expande;
}

bodyclick() {
  this.expande1 = false;
  this.expande2 = false;
  this.expande = false; 
  const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
  this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  autoplay: true,
  navText: ['<', '>'],
  responsive: {
    0: {
      items: 1, // 1 item visible for screen width less than 400 pixels
    },
    400: {
      items: 1, // 1 item visible for screen width 400 pixels or more
    },
    740: {
      items: 1, // 2 items visible for screen width 740 pixels or more
    },
    1000: {
      items: 3, // 2 items visible for screen width 1000 pixels or more
    },
  },
  nav: false,
};

activeSlides!: SlidesOutputData;

slidesStore: any[] = [
  {
    img:'./assets/images/faces/11.jpg',
    role:'MANAGER',
    name:'James Lucas',
  },
  {
    img:'./assets/images/faces/1.jpg',
    role:'MANAGER',
    name:'Aldous Cason',
  },

  {
    img:'./assets/images/faces/14.jpg',
    role:'CEO',
    name:'Kiara Advain',
  },
  {
    img:'./assets/images/faces/8.jpg',
    role:'CHIEF EXECUTIVE',
    name:'Jhonson Smith',
  },

  {
    img:'./assets/images/faces/4.jpg',
    role:'HR MANAGER',
    name:'Nitheri Morgan',
  }, 
  {
    img:'./assets/images/faces/9.jpg',
    role:'GM BRAND',
    name:'Natalie Miller',
  },
  {
    img:'./assets/images/faces/10.jpg',
    role:'CHEIF ENGINEER',
    name:'Dolph MR',
  },
  {
    img:'./assets/images/faces/13.jpg',
    role:'CEO WEFTY',
    name:'Evelyn Anna',
  },
  {
    img:'./assets/images/faces/6.jpg',
    role:'MANAGER DIRECTOR',
    name:'Aldous Cason',
  },
  
];

getPassedData(data: SlidesOutputData) {
  this.activeSlides = data;
}

indexNumber = 1;

featuredData = [
  {
    jod:'React Developer - Senior',
    logo:'reactjs',
    compony:'Globii Co.PvT.Ld',
    location:'Hyderabad',
    openings:'12 Openings',
    src:'./assets/images/company-logos/3.png'
  },
  {
    jod:'Vue Developer - Senior',
    logo:'vuejs',
    compony:'Acmey Corporation.Ld',
    location:'Hyderabad',
    openings:'12 Openings',
    src:'./assets/images/company-logos/4.png'
  },
  {
    jod:'Angular Developer - Senior',
    logo:'angularjs',
    compony:'Doliy Software',
    location:'Hyderabad',
    openings:'12 Openings',
    src:'./assets/images/company-logos/5.png'
  },
  {
    jod:'Customer Support - Freshers',
    logo:'customer-service-2',
    compony:'Massi Internatinal',
    location:'Hyderabad',
    openings:'10 Openings',
    src:'./assets/images/company-logos/1.png'
  },
  {
    jod:'Marketing Product',
    logo:'article',
    compony:'Vihams Storage Ltd',
    location:'Hyderabad',
    openings:'05 Openings',
    src:'./assets/images/company-logos/6.png'
  },
  {
    jod:'Civil Engineer',
    logo:'building-2',
    compony:'Somany Infrastructures',
    location:'Hyderabad',
    openings:'11 Openings',
    src:'./assets/images/company-logos/7.png'
  }
]

scroll(el: HTMLElement) {
  el.scrollIntoView({ behavior: 'smooth' });
}
scrolled = false;

@HostListener('window:scroll', [])
onWindowScroll() {
  this.scrolled = window.scrollY > 10;
  const sections = this.el.nativeElement.querySelectorAll('.side-menu__item');
  const scrollPos =
    window.scrollY ||
    this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop ||
    document.body.scrollTop;
  sections.forEach((el: any, i: string | number) => {
    const currLink = sections[i];
    const val: any = currLink.getAttribute('value');
    const refElement: any = this.el.nativeElement.querySelector('#' + val);

    if (refElement !== null) {
      const scrollTopMinus = scrollPos + 73;
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        const activeNav =
          this.el.nativeElement.querySelector('.nav-scroll.active');
        if (activeNav) {
          this.renderer.removeClass(activeNav, 'active');
        }
        this.renderer.addClass(currLink, 'active');
      } else {
        this.renderer.removeClass(currLink, 'active');
      }
    }
  });
}

}

