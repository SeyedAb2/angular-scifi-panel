import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-error401',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './error401.component.html',
  styleUrls: ['./error401.component.scss']
})
export class Error401Component {
  constructor(private router: Router) {
    let html = document.querySelector('html');
    // html?.removeAttribute('data-card-background');
  
  }
  ngOnDistroy(){
    let html = document.querySelector('html');
    html?.setAttribute('data-card-background','background1');
  }
  

}
