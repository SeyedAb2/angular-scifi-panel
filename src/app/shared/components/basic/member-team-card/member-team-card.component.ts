import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-member-team-card',
  standalone: true,
  imports: [],
  templateUrl: './member-team-card.component.html',
  styleUrl: './member-team-card.component.scss'
})
export class MemberTeamCardComponent {
  @Input('person') item:any
  
}
