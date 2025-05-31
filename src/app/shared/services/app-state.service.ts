import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface StateType {
  direction: string;
  navigationStyles: string,      // vertical, horizontal
  menuStyles: string,            // menu-click, menu-hover, icon-click, icon-hover
  layoutStyles: string,          // double-menu, detached, icon-overlay, icontext-menu, closed-menu, default-menu
  widthStyles: string,           // fullwidth, boxed
  menuPosition: string,          // fixed, scrollable
  headerPosition: string,        // fixed, scrollable
  themePrimary: string,          // '58, 88, 146', '92, 144, 163', '161, 90, 223', '78, 172, 76', '223, 90, 90'
  bgPatternImage:string,
  codingStyles:string,
  cardBackground:string,
  themeBackground: string,
  backgroundImage: string,   
};
@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private readonly localStorageKey = 'scifi-ng'; // Customize this key
  private initialState: StateType = {
    direction: 'rtl',               // ltr, rtl
    navigationStyles: 'vertical',   // vertical, horizontal
    menuStyles: '',                 // menu-click, menu-hover, icon-click, icon-hover
    layoutStyles: '',               // double-menu, detached, icon-overlay, icontext-menu, closed-menu, default-menu
    widthStyles: '',                // fullwidth, boxed
    menuPosition: '',               // fixed, scrollable
    headerPosition: '',             // fixed, scrollable
    themePrimary: '',               // '58, 88, 146', '92, 144, 163', '161, 90, 223', '78, 172, 76', '223, 90, 90'
    bgPatternImage:'',              //  bgpattern1, bgpattern2, bgpattern3, bgpattern4, bgpattern5, bgpattern6, bgpattern7, bgpattern8, bgpattern9, bgpattern10
    codingStyles:'',                // style1, style2, style3, style4, style5, style6, style7, style8, style9, style10
    cardBackground:'',
    themeBackground: '',
    backgroundImage: '',            // bgimg1, bgimg2, bgimg3, bgimg4, bgimg5
  } // Store initial state
  private stateSubject = new BehaviorSubject<StateType>(this.initialState); // Use any for initial null value
  state$ = this.stateSubject.asObservable();

  constructor() {
    const initialState: StateType = this.getInitialStateFromLocalStorage();
    this.initializeState();
    this.stateSubject.next(initialState);
  }
  
  private getInitialStateFromLocalStorage(): StateType {
    try {
      const storedState = localStorage.getItem(this.localStorageKey);
      if (storedState) {
        return JSON.parse(storedState);
      }
    } catch (error) {
      console.error('Error retrieving initial state from local storage:', error);
    }
    return this.initialState;
  }

  private initializeState() {
    const state = { ...this.initialState }; // Clone initial state to avoid mutation
    this.applyDirectionSpecificChanges(state.direction); // Apply initial changes
    this.stateSubject.next(state); // Emit initial state after changes
  }

  updateState(newState?: Partial<any>) { // Use any for partial updates
    const currentState = this.stateSubject.getValue(); // Get current state

    // console.log("newState",newState);
    if (!currentState) {
      // Handle initial update case (no state emitted yet)
      this.updateStateAndEmit(newState);
      return;
    }
    if (newState) {
      const updatedState = { ...currentState, ...newState }; // Merge updates
      this.updateStateAndEmit(updatedState); // Update and emit combined state
    } else {
      this.updateStateAndEmit(currentState);
      return;
    }
  }

  private applyPrimarySpecificChanges(primary: any) {
    let html = document.querySelector('html');      
    html?.style.setProperty( '--primary-rgb', primary.main);
    html?.style.setProperty( '--theme-bg-gradient', primary.secondary);
    html?.style.setProperty( '--light-rgb', primary.accent );
  }

  private applyDirectionSpecificChanges(direction: string) {
    let html = document.querySelector('html');
    html?.setAttribute('dir', direction);
  }
  
  private applyNavigationStylesSpecificChanges(navigationStyles: string) {

    let html = document.querySelector('html');
    html?.setAttribute('data-nav-layout', navigationStyles);
    if (navigationStyles == 'horizontal') {
      html?.setAttribute('data-nav-style', 'menu-click');
      html?.removeAttribute('data-vertical-style');
    }
  }
  private applyMenuStylesSpecificChanges(menuStyles: string) {
    let html = document.querySelector('html');
    html?.setAttribute('data-nav-style', menuStyles);
    html?.setAttribute('data-toggled', menuStyles+'-closed');
    html?.removeAttribute('data-vertical-style');

    if (html?.getAttribute('data-nav-style') == 'icon-hover') {
      document.querySelector('.child1')?.removeAttribute('style')
    } else {
       document.querySelector('.child1')?.setAttribute('style','display: block;')
    }
  }
  
  private applyLayoutStylesSpecificChanges(layoutStyles: string) {
    let html = document.querySelector('html');
    html?.setAttribute('data-vertical-style', layoutStyles);
    html?.removeAttribute('data-nav-style');
    switch (layoutStyles) {
      case 'default':
        html?.setAttribute('data-vertical-style', 'overlay');
        html?.removeAttribute('data-toggled');
        break;
      case 'closed':
        html?.setAttribute('data-toggled', 'close-menu-close');
        break;
      case 'icontext':
        html?.setAttribute('data-toggled', 'icon-text-close');
        break;
      case 'overlay':
        html?.setAttribute('data-toggled', 'icon-overlay-close');
        break;
      case 'detached':
        html?.setAttribute('data-toggled', 'detached-close');
        break;
      case 'doublemenu':
        html?.setAttribute('data-toggled', 'double-menu-open');
        break;
    }
    if (layoutStyles === 'icon-text') {
      html?.setAttribute('icon-text', 'open');
    } else {
      // If not 'icon-text', remove the icon-text attribute
      html?.removeAttribute('icon-text');
    }
  }
  private applywidthStylesSpecificChanges(widthStyles: string) {
    let html = document.querySelector('html');
    html?.setAttribute('data-width', widthStyles);
  }
  private applymenuPositionSpecificChanges(menuPosition: string) {
    let html = document.querySelector('html');    
    html?.setAttribute('data-menu-position', menuPosition);
  }
  private applyheaderPositionSpecificChanges(headerPosition: string) {
    let html = document.querySelector('html');    
    html?.setAttribute('data-header-position', headerPosition);
  }
  private applybackgroundPatternSpecificChanges(bgPatternImage: string) {
    let html = document.querySelector('html');        
    html?.setAttribute('data-pattern-img', bgPatternImage);
  }
  private applyCodingStyleSpecificChanges(codingStyles: string) {
    let html = document.querySelector('html');        
    html?.setAttribute('data-card-style', codingStyles);
  }
  
  private applyCardBackgroundSpecificChanges(cardBackground: string) {
    let html = document.querySelector('html');        
    html?.setAttribute('data-card-background', cardBackground);
  }
  private applyBackgroundImageSpecificChanges(backgroundImage: string) {
    let html = document.querySelector('html');        
    html?.setAttribute('data-bg-img', backgroundImage);
  }
  public applyReset() {
    let html = document.querySelector('html');
    html?.removeAttribute('style');
    html?.removeAttribute('data-bg-img');
    html?.removeAttribute('data-pattern-img');
    html?.removeAttribute('data-menu-position');
    html?.removeAttribute('data-header-position');
    html?.removeAttribute('data-width');
    html?.setAttribute('data-toggled','close');
    html?.setAttribute('data-card-style', 'style1');
    html?.setAttribute('dir', 'ltr');
      document.querySelector('.main-menu')?.removeAttribute('style')
    document.querySelector('.slide-menu')?.removeAttribute('style')

    html?.setAttribute('data-card-background', 'background1');
    html?.setAttribute('data-vertical-style', 'detached');
    this.stateSubject.next(this.initialState);
   this.updateStateAndEmit(this.initialState);
    localStorage.clear();
    const BgPattern = document.getElementById(
      'switcher-pattern-img3'
    ) as HTMLInputElement;
    if(BgPattern){
      BgPattern.checked = true;
    }
    const CodingStyle = document.getElementById(
      'switcher-card-style'
    ) as HTMLInputElement;
    if(CodingStyle){
      CodingStyle.checked = true;
    }
    const CardBg = document.getElementById(
      'switcher-card-background'
    ) as HTMLInputElement;
    if(CardBg){
      CardBg.checked = true;
    }
    
  }
  public applyReset1() {
    let html = document.querySelector('html');
    html?.removeAttribute('style');
    html?.removeAttribute('data-bg-img');
    html?.removeAttribute('data-pattern-img');
    html?.removeAttribute('data-menu-position');
    html?.removeAttribute('data-header-position');
    html?.removeAttribute('data-width');
    html?.setAttribute('data-toggled','close');
    html?.setAttribute('data-card-style', 'style1');
    html?.setAttribute('dir', 'ltr');
    html?.setAttribute('data-nav-layout', 'horizontal');
    html?.setAttribute('data-card-background', 'background1');
    html?.setAttribute('data-vertical-style', 'detached');
     this.stateSubject.next(this.initialState);
    localStorage.clear();
  }
  private updateStateAndEmit(state: any) {
    // Conditional logic based on direction changes        
    const currentState = this.stateSubject.getValue(); // Get current state    
    
    if (state['direction']) {
      this.applyDirectionSpecificChanges(state['direction']);
    }
    // Conditional logic based on theme changes
    if (state['navigationStyles']) {
      this.applyNavigationStylesSpecificChanges(state['navigationStyles']);
         }
    // Conditional logic based on theme changes
    if (state['menuStyles'] && !state['layoutStyles']) {
      this.applyMenuStylesSpecificChanges(state['menuStyles']);
   
    }
    if (state['layoutStyles'] && !state['menuStyles']) {
      this.applyLayoutStylesSpecificChanges(state['layoutStyles']);
    }
  
    if (state['widthStyles']) {
      this.applywidthStylesSpecificChanges(state['widthStyles']);
    }
    if (state['menuPosition']) {
      this.applymenuPositionSpecificChanges(state['menuPosition']);
    }
    if (state['headerPosition']) {
      this.applyheaderPositionSpecificChanges(state['headerPosition']);
    }
    if (state['themePrimary']) {
      this.applyPrimarySpecificChanges(state['themePrimary']);
    }
     
    if (state['bgPatternImage']) {
      this.applybackgroundPatternSpecificChanges(state['bgPatternImage']);
    }

    if (state['codingStyles']) {
      this.applyCodingStyleSpecificChanges(state['codingStyles']);
    }

    if (state['cardBackground']) {
      this.applyCardBackgroundSpecificChanges(state['cardBackground']);
    }

    if (state['backgroundImage']) {
      this.applyBackgroundImageSpecificChanges(state['backgroundImage']);
    }

    this.stateSubject.next(state);
    this.updateLocalStorage(state);
  }
  private updateLocalStorage(state: any) {
    try {
      localStorage.setItem(this.localStorageKey, JSON.stringify(state));
    } catch (error) {
      console.error('Error saving state to local storage:', error);
    }
  }
}
