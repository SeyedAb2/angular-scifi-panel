import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import 'zone.js';

@Component({
  selector: 'app-draggable-cards',
  standalone: true,
  imports: [NgbModule, SharedModule, DragulaModule],
  templateUrl: './draggable-cards.component.html',
  styleUrl: './draggable-cards.component.scss',
})
export class DraggableCardsComponent {
  isCollapsed = false;
  isCollapsed1 = false;

  constructor(private dragulaService: DragulaService) {
    // use these if you want

    this.dragulaService.createGroup('VAMPIRES', {
      // ...
    });

    this.dragulaService.dropModel('VAMPIRES').subscribe((args) => {
      console.log(args);
    });
  }

  fullScreenToggle() {
    document.querySelector('.fullscreentoggle')?.classList.toggle('card-fullscreen');
  }
}
