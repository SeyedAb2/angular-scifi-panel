import { Component } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent {

   ngOnInit(): void {
    let html = document.querySelector('html');
    let body = document.querySelector('body');
    html?.setAttribute('data-theme-mode','dark');
    body?.classList.add('authentication-background');
   }

   ngOnDistroy(){
    let html = document.querySelector('html');
    let body = document.querySelector('body');
    html?.setAttribute('data-card-background','background1');
    body?.classList.remove('authentication-background');
  }
  public showPassword: boolean = false;
  toggleClass = 'ri-eye-off-line';
  public showPassword1: boolean = false;
  toggleClass1 = 'ri-eye-off-line';
  public togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === 'ri-eye-line') {
      this.toggleClass = 'ri-eye-off-line';
    } else {
      this.toggleClass = 'ri-eye-line';
    }
  }

  public togglePassword1() {
    this.showPassword1 = !this.showPassword1;
    if (this.toggleClass1 === 'ri-eye-line') {
      this.toggleClass1 = 'ri-eye-off-line';
    } else {
      this.toggleClass1 = 'ri-eye-line';
    }
  }
}
