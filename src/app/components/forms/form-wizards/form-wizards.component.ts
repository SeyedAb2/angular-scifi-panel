import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModal, NgbModule, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatStepperModule,
  StepperOrientation,
} from '@angular/material/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from 'ngx-editor';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FlatpickrModule,FlatpickrDefaults } from 'angularx-flatpickr';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-wizards',
  standalone: true,
  imports: [SharedModule,NgbModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatStepperModule,FormsModule,ReactiveFormsModule,CommonModule,FlatpickrModule,NgSelectModule,RouterModule],
  providers:[FlatpickrDefaults],
  templateUrl: './form-wizards.component.html',
  styleUrl: './form-wizards.component.scss'
})
export class FormWizardsComponent {
  

  active: any;
	disabled = true;
  
  basicDemoValue = '';

  onNavChange(changeEvent: NgbNavChangeEvent) {
		if (changeEvent.nextId === 1) {
			changeEvent.preventDefault();
		}
	}

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));

     
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  forthFormGroup = this._formBuilder.group({
    forthCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    fifthCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;


  contactForm!: FormGroup;
  jobForm!: FormGroup;
  educationForm!: FormGroup;

  nextTab(tabIndex: number) {
    switch (tabIndex) {
      case 1:
        if (this.contactForm.valid) {
          // Proceed to next tab
          break;
        } else {
          // Handle form validation error
          return;
        }
      // Handle validation for other tabs similarly
    }
  }
}

