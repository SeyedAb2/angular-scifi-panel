import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2, inject } from '@angular/core';
import { SwitcherService } from '../../services/switcher.service';
import { NavService } from '../../services/nav.service';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-landing-switcher',
  templateUrl: './landing-switcher.component.html',
  styleUrl: './landing-switcher.component.scss'
})
export class LandingSwitcherComponent {
  activeOffcanvas = inject(NgbActiveOffcanvas);
  localdata: any;
  constructor( public renderer: Renderer2,
    public switcherServic: SwitcherService,
    public navServices: NavService,
    private elementRef: ElementRef,private appStateService: AppStateService){
      this.appStateService.state$.subscribe(state => {
        this.localdata = state;
      });  
  }
 
  ngOnInit(): void {
    let html = document.documentElement;
    this.renderer.setAttribute(html, 'data-nav-style', 'menu-click');
    this.renderer.setAttribute(html, 'data-nav-layout', 'horizontal');
    this.renderer.removeAttribute(html, 'data-nav-layout', 'horizontal');
    html.removeAttribute('data-vertical-style');
  }

  updateDirection(direction: string) {
    this.appStateService.updateState({ direction });
    let html = document.documentElement;
    if(html.getAttribute('dir') == 'rtl'){
      html.removeAttribute('data-vertical-style');
      this.renderer.setAttribute(html, 'data-nav-layout', 'horizontal');
     } else{
      html.removeAttribute('data-vertical-style');
      this.renderer.setAttribute(html, 'data-nav-layout', 'horizontal');
     }
  }

  updateprimary(themePrimary: any) {
    let html = document.documentElement;
    this.appStateService.updateState({ themePrimary});
    if(html.getAttribute('dir') == 'rtl'){
      html.removeAttribute('data-vertical-style');
      this.renderer.setAttribute(html, 'data-nav-layout', 'horizontal');
     } else{
      html.removeAttribute('data-vertical-style');
      this.renderer.setAttribute(html, 'data-nav-layout', 'horizontal');
     }
  }

   //primary theme change
   defaultPrimary = '#6c5ffc';
   public dynamicLightPrimary(data: any): void {
     this.defaultPrimary = data.color;
     let primaryColor = this.convertRgbToIndividual1(this.defaultPrimary)
     let primaryColor1 = this.convertRgbToIndividual1(this.defaultPrimary)
     let primary1Update = primaryColor.split(' ').join(',');
     let primary2Update:any = primaryColor1.split(' ');
     primary2Update[0] = Number(primary2Update[0]) + 14;
     primary2Update[1] = Number(primary2Update[1]) + 14;
     primary2Update[2] = Number(primary2Update[2]) + 14;
     let PrimaryColor:any = {
       main :  primary1Update,
       secondary : "#01041a",
       accent: '17, 1, 24'
   }
     this.updateprimary(PrimaryColor);
   }
   convertRgbToIndividual1(value:string):string {
     // Use a regular expression to extract the numeric values
     const numericValues = value.match(/\d+/g)||[];
     // Join the numeric values with spaces to get the desired format
     return numericValues.join(' '); 
 }
 
 reset() { 
  let html = document.querySelector('html');
  html?.setAttribute('dir','ltr')
 html?.setAttribute('data-nav-layout','horizontal')
  localStorage.clear();
  this.appStateService.applyReset1();
  html?.removeAttribute('data-vertical-style');
}

expande = false;
expande1 = false;
expande2 = false;
toggleExpand(): void {
  this.expande = !this.expande;   
 if (localStorage.getItem('data-menu-styles') == 'light') {
   document.querySelector('html')?.setAttribute('data-menu-styles', 'light');
 } else if (localStorage.getItem('data-menu-styles') == 'dark') {
   document.querySelector('html')?.setAttribute('data-menu-styles', 'dark');
 }
}

ngOnDestroy() {
  let html = document.querySelector('html');
  if (localStorage.getItem('data-menu-styles') == 'light') {
    document.querySelector('html')?.setAttribute('data-menu-styles', 'light');
  } else if (localStorage.getItem('data-menu-styles') == 'dark') {
    document.querySelector('html')?.setAttribute('data-menu-styles', 'dark');
  }
  html?.removeAttribute('data-vertical-style');
}
}

