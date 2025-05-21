import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [SharedModule,NgbModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  isCollapsed = false;
  isCollapsed1 = false;

  fullScreenClick(){
    document.querySelector('.fullScreenCard')?.classList.toggle('card-fullscreen')
  }
}
