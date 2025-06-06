import {
  trigger, state, style, animate, transition
} from '@angular/animations';



export const collapseTeamCard = trigger('expandCollapse', [
  state('void', style({
    transform: 'scale(0.8)',
    opacity: 0
  })),
  state('*', style({
    transform: 'scale(1)',
    opacity: 1
  })),
  transition('void <=> *', animate('200ms ease-in-out'))
]);

export const fade = trigger('fade', [
    transition(':enter', [
      style({ opacity:0 }),
      animate('0.3s ease-in', style({ opacity: 1 }))
    ])
])