import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Renderer2, TemplateRef } from '@angular/core';
import { CarouselModule, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { fromEvent } from 'rxjs';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbCollapseModule, NgbNavModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SwitcherService } from '../../../shared/services/switcher.service';
import { LandingSwitcherComponent } from '../../../shared/components/landing-switcher/landing-switcher.component';
// import { SwiperModule } from 'swiper/angular';

export interface PhotosApi {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,SharedModule,CarouselModule,FormsModule,ReactiveFormsModule,NgbNavModule,RouterModule,NgbAccordionModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent {
  panels = [
    'How do I integrate the template into my project?',
    ' How frequently is the template updated?',
    'What support options are available for landing page services?',
    ' Can I upgrade or downgrade my subscription plan?',
    ' How often will I be billed for my subscription?',
    ' What is included in the subscription service?',
  ];
  panels1 = [
    'How often will I be billed for my subscription?',
    'What is included in the subscription service?',
    ' How do I integrate the template into my project?',
    'How frequently is the template updated?',
    'What are your opening hours?',
    ' Do I have the right to return an item?',
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

expande = false;
expande1 = false;
expande2 = false;
toggleExpand(): void {
  this.expande = !this.expande;   
 if (localStorage.getItem('data-menu-styles') == 'light') {
   document
     .querySelector('html')
     ?.setAttribute('data-menu-styles', 'light');
 } else if (localStorage.getItem('data-menu-styles') == 'dark') {
   document
     .querySelector('html')
     ?.setAttribute('data-menu-styles', 'dark');
 }
}

bodyclick() {
  this.expande1 = false;
  this.expande2 = false;
  this.expande = false; 
  const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
  this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
}

indexNumber = 1;
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

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 100,
  autoplay: false,
  navText: ['<', '>'],
  responsive: {
    0: {
      items: 1, // 1 item visible for screen width less than 400 pixels
    },
    400: {
      items: 2, // 1 item visible for screen width 400 pixels or more
    },
    740: {
      items: 2, // 2 items visible for screen width 740 pixels or more
    },
    1000: {
      items: 2, // 2 items visible for screen width 1000 pixels or more
    },
  },
  nav: false,
};

activeSlides!: SlidesOutputData;

slidesStore: any[] = [
  {
    img:'./assets/images/faces/9.jpg',
    rating:'4.3 ',
    name:'David John',
    discription:'Nulla maximus nunc ut euismod condimentum. Nunc vel quam maximus, sagittis ante non, tempor risus. Suspendissei. Nam lacus risus.',
    email:'davidjohn&#64;gmail.com',
    days:'5 days ago',
  },
  {
    img:'./assets/images/faces/3.jpg',
    rating:'4.5 ',
    discription:'Mauris quis dolor ut nisl mattis dignissim sed ac massa. Nunc ante nisi, malesuada id leo sit amet, pretium fringilla dolor.',
    name:'Violet Sofi',
   email:'violetsofi&#64;gmail.com',
   days:'10 days ago',
  },
  {
    img:'./assets/images/faces/8.jpg',
    rating:'4.3',
    discription:'Mauris quis dolor ut nisl mattis dignissim sed ac massa. Nunc ante nisi, malesuada id leo sit amet, pretium fringilla dolor.',
    name:'Arunima Alice',
   email:'Arunimaalice&#64;gmail.com',
   days:'2 days ago',
  },
  {
    img:'./assets/images/faces/10.jpg',
    rating:'4.3',
    discription:'Nulla maximus nunc ut euismod condimentum. Nunc vel quam maximus, sagittis ante non, tempor risus. Suspendissei. Nam lacus risus.',
    name:'Isaac Elias',
   email:'isaacelias&#64;gmail.com',
   days:'17 days ago',
  },
  {
    img:'./assets/images/faces/2.jpg',
    rating:'4.1',
    discription:'Mauris quis dolor ut nisl mattis dignissim sed ac massa. Nunc ante nisi, malesuada id leo sit amet, pretium fringilla dolor.',
    name:'Stella Joy',
   email:'Stellajoy&#64;gmail.com',
   days:'13 days ago',
  },
  {
    img:'./assets/images/faces/5.jpg',
    rating:'4.3',
    discription:'Nulla maximus nunc ut euismod condimentum. Nunc vel quam maximus, sagittis ante non, tempor risus. Suspendissei. Nam lacus risus.',
    name:'Reva Saan',
   email:'revasaan&#64;gmail.com',
   days:'2 days ago',
  },
 
];

getPassedData(data: SlidesOutputData) {
  this.activeSlides = data;
  // console.log(this.activeSlides);
}


scroll(el: HTMLElement) {
  el.scrollIntoView({ behavior: 'smooth' });
}

scrolled = true;

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
