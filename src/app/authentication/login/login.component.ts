import { Component, ElementRef} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AuthService } from '../../shared/services/auth.service';
import { FirebaseService } from '../../shared/services/firebase.service';
import { AppStateService } from '../../shared/services/app-state.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule,ReactiveFormsModule,NgbModule,AngularFireModule,AngularFireAuthModule,AngularFireDatabaseModule,
    AngularFirestoreModule],
    providers: [FirebaseService,{ provide: ToastrService, useClass: ToastrService }],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public showPassword: boolean = false;

  toggleClass = 'ri-eye-off-line';
  active="Angular";

  public togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === 'ri-eye-line') {
      this.toggleClass = 'ri-eye-off-line';
    } else {
      this.toggleClass = 'ri-eye-line';
    }
}
disabled = '';
public localdata:any=this.appStateService;

constructor(
 private elementRef: ElementRef,
  public authservice: AuthService,
  private router: Router,
  private formBuilder: FormBuilder,
  private firebaseService: FirebaseService,
  private toastr: ToastrService ,
  private appStateService: AppStateService,
) {
   document.body.classList.add('authentication-background');
  const htmlElement =
  this.elementRef.nativeElement.ownerDocument.documentElement;
    htmlElement.removeAttribute('style'); 
}
ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    username: ['spruko@admin.com', [Validators.required, Validators.email]],
    password: ['sprukoadmin', Validators.required],
  });

}

ngOnDestroy(): void {
  const htmlElement =
this.elementRef.nativeElement.ownerDocument.documentElement;
  document.body.classList.remove('authentication-background');    
}

 firestoreModule = this.firebaseService.getFirestore();
 databaseModule = this.firebaseService.getDatabase();
 authModule = this.firebaseService.getAuth();
// firebase
email = 'spruko@admin.com';
password = 'sprukoadmin';
errorMessage = ''; // validation _error handle
_error: { name: string; message: string } = { name: '', message: '' }; // for firbase _error handle

//angular
public loginForm!: FormGroup;
public error: any = '';

get form() {
  return this.loginForm.controls;
}

Submit() {
  // console.log(this.loginForm)
  if (
    this.loginForm.controls['username'].value === 'spruko@admin.com' &&
    this.loginForm.controls['password'].value === 'sprukoadmin'
  ) {
    this.router.navigate(['/dashboards/gaming']);
    this.toastr.success('login successful','Scifi', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  } else {
    this.toastr.error('Invalid details','Scifi', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  }

}
}