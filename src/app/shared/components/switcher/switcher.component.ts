import { Component, inject } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss'],
})
export class SwitcherComponent {
  activeOffcanvas = inject(NgbActiveOffcanvas);
  public localdata:any;

  constructor( private appStateService: AppStateService){
    this.appStateService.state$.subscribe(state => {
      this.localdata = state;
    });
}

  updateDirection(direction: string) {
    this.appStateService.updateState({ direction });
  }

  updatemenuType(navigationStyles: string) {
    this.appStateService.updateState({ navigationStyles });
    if(navigationStyles=='horizontal'){
      this.appStateService.updateState({ navigationStyles,layoutStyles : ''});
      const menuclickclosed = document.getElementById(
        'switcher-menu-click'
      ) as HTMLInputElement;
      menuclickclosed.checked = true;
    }
  }

  updatemenuStyle(menuStyles: string) {
    this.appStateService.updateState({ menuStyles, layoutStyles : '' });
    const slideMenu = document.querySelector('.slide-menu');
    if (slideMenu) {
      const menuStyles = slideMenu.getAttribute('style');
      if (menuStyles && menuStyles.includes('display: none')) {
        slideMenu.setAttribute('style', 'display: block;');
      } else {
        slideMenu.setAttribute('style', 'display: none;');
      }
    }
  }

  updatelayoutStyles(layoutStyles: string) {
    this.appStateService.updateState({ layoutStyles, menuStyles : '', });
  }

  updatewidthStyles(widthStyles: string) {
    this.appStateService.updateState({ widthStyles });
  }
  
  updatemenuPosition(menuPosition: string) {
    this.appStateService.updateState({ menuPosition });
  }

  updateheaderPosition(headerPosition: string) {
    this.appStateService.updateState({ headerPosition });
  }
  
  updateprimary(themePrimary: any) {
    this.appStateService.updateState({ themePrimary});
  }

  updateBgPattern(bgPatternImage: string) {
    this.appStateService.updateState({ bgPatternImage});
  }
  updateCodingStyle(codingStyles: string) {
    this.appStateService.updateState({ codingStyles});
  }
  updateCardBg(cardBackground: string) {
    this.appStateService.updateState({ cardBackground});
  }

  updateBgImage(backgroundImage: string) {
    this.appStateService.updateState({ backgroundImage});
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
  this.appStateService.applyReset();
}
}
