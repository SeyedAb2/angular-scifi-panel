
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-job-post',
  standalone: true,
  imports: [SharedModule,NgSelectModule, FormsModule, FlatpickrModule],
  templateUrl: './job-post.component.html',
  styleUrl: './job-post.component.scss'
})
export class JobPostComponent {
  selectedSimpleItem='Development';
  simpleItems:any=[];

  // select 2
  selectedSimpleItem1='0-1 years';
  simpleItems1:any=[];

  // select 3
  selectedSimpleItem2='Contract';
  simpleItems2:any=[];

  // select 4
  selectedSimpleItem3='Normal';
  simpleItems3:any=[];

  // select 5
  selectedSimpleItem4='10';
  simpleItems4:any=[];

  // select 6
  selectedSimpleItem5='0 - $1,00,000 / Year';
  simpleItems5:any=[];

  // select7
  selectedSimpleItem6='No-preferences';
  simpleItems6:any=[];
  
   // select 5
   selectedLocation='Hyderabad';
   Location:any=[];
 

  selectedSkills = [1,2,3];
  skills = [
      { id: 1, name: 'Css' },
      { id: 2, name: 'HTML', },
      { id: 3, name: 'JavaScript' },
      { id: 4, name: 'React' },
  ];
  // select type 2-1
  selectedLanguage = [1,2,3];
  language = [
      { id: 1, name: 'English' },
      { id: 2, name: 'Hindi', },
      { id: 3, name: 'Arabic' },
      { id: 4, name: 'French' },
  ];
  // select type 2-2
  selectedQualification= [1,2,4];
  Qualification= [
      { id: 1, name: 'Graduate' },
      { id: 2, name: 'MBA', },
      { id: 3, name: 'Diploma' },
      { id: 4, name: 'MCA' },
  ]; 
// select 8
selectedSimpleItem7='Obligation Pvt.Ltd';
simpleItems7:any=[];
//select 9
selectedSimpleItem8='India';
simpleItems8:any=[];


  ngOnInit(): void {

    this.simpleItems=['Development','It Software','Marketing']
    this.simpleItems1=['0-1 years','1-3 years','3-5 years']
    this.simpleItems2=['Contract','Freelancer','Full-Time','InternShip','PartTime']
    this.simpleItems3=['Normal','Urgent',]
    this.simpleItems4=['10','20','30','40','50']
    this.simpleItems5=['0 - $1,00,000 / Year','$1,00,000 - $3,00,000','$3,00,000 - $5,00,000']
    this.simpleItems6=['Female Only','Male Only','No prefarence']
    this.Location=['Hyderabad','Bangalore','Pune','Chennai']
    this.simpleItems7=['Bloom Tech','Obligation pvt Ltd',' Spotech technology Solution']
    this.simpleItems8=['Germany','India',' USA','Spain']


    
  }
  toggleDisabled() {
    const car: any = this.skills[1];
    car.disabled = !car.disabled;
}

toggleDisabled1() {
  const car: any = this.language[1];
  car.disabled = !car.disabled;
}

toggleDisabled2() {
  const car: any = this.Qualification[1];
  car.disabled = !car.disabled;
}
basicDemoValue = '25-05-2028';

}

