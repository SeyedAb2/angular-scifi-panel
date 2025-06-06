import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [SharedModule,NgbModule,ReactiveFormsModule,FormsModule],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent {
  model!: NgbDateStruct;
  timePicker: Date | null = null;
  dateTimeValue: Date = new Date();

}
