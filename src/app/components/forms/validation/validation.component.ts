import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [SharedModule,FormsModule,ReactiveFormsModule,CommonModule,NgSelectModule],
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent {

// Form1
form!: FormGroup;
submitted = false;
submitted1 = true;
submitted3 = false;

constructor(private formBuilder: FormBuilder) {}
ngOnInit(): void {
  //Form1
  this.form = this.formBuilder.group({
    fullname: ['', Validators.required],
    lastname: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ],
    ],
    city: ['', Validators.required],
    state: ['', Validators.required],
    username: ['', Validators.required],
    zip: ['', Validators.required],
    acceptTerms: [false, Validators.requiredTrue],
  });
  //form1 END
  //Form4
  this.form4 = this.formBuilder.group({
    textarea: ['', Validators.required],
    checkbox: ['', Validators.required],
    radiostacked: ['', Validators.required],
    select: ['', Validators.required],
    feedback: ['', Validators.required],
  });
  // Form4END
  //Form3
  this.form3=this.formBuilder.group({
    name:['',Validators.required],
    lname: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ],
    ],
    cit: ['', Validators.required],
    stat: ['', Validators.required],
    uname: ['', Validators.required],
    zip: ['', Validators.required],

  })
  //Form2
  this.form2 =this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname:['',Validators.required],
    username:['',Validators.required],
    city:['',Validators.required],
    zip:['',Validators.required],
    checkbox: [false, Validators.requiredTrue],
    state:['',Validators.required],



  })

 
}
get f(): { [key: string]: AbstractControl } {
  return this.form.controls;
}

OnSubmit(): void {
  this.submitted = true;

  if (this.form.invalid) {
    return;
  }
}
// Form4
form4!: FormGroup;
get f1(): { [key: string]: AbstractControl } {
  return this.form4.controls;
}
Submit(): void {
  this.submitted = true;

  if (this.form4.invalid) {
    return;
  }
}

//Form3
form3!: FormGroup;
get f3(): { [key: string]: AbstractControl } {
  return this.form3.controls;
}
Submit3(): void {
  this.submitted3 = true;
  console.log("one")

  if (this.form3.invalid) {
    return;
  }
}


//Form2
public form2!: FormGroup;
Submit1() {
if (this.form2.valid) {
  // Form is valid, handle the form submission here
  console.log('Form submitted successfully!');
} else {
  // Form is invalid, display error messages or handle accordingly
  console.log('Form is invalid!');
}
}
}

