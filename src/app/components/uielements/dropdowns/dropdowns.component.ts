import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import {  NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule],
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss']
})
export class DropdownsComponent {

}
