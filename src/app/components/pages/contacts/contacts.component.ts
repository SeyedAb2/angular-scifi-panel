import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [SharedModule,NgbModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  page=1;

  cardData = [
    {
      heart:'fill',
      img:'./assets/images/faces/4.jpg',
      name:'Amelia',
      mail:'emiley2134@gmail.com',
      phone:'+1(222) 354 2345'
    },
    {
      heart:'line',
      img:'./assets/images/faces/15.jpg',
      name:'Jackson',
      mail:'Jackson111@gmail.com',
      phone:'+1(222) 873 8923'
    },
    {
      heart:'fill',
      img:'./assets/images/faces/2.jpg',
      name:'Kingston',
      mail:'Kingston55@gmail.com',
      phone:'  +1(222) 347 0923'
    },
    {
      heart:'line',
      img:'./assets/images/faces/13.jpg',
      name:' Robin Keith',
      mail:' RobinKeith424@gmail.com',
      phone:'+1(222) 674 7824'
    },
    {
      heart:'fill',
      img:'./assets/images/faces/9.jpg',
      name:'Sebastian',
      mail:'Sebastian@gmail.com',
      phone:'+1(222) 985 2893'
    },
    {
      heart:'line',
      img:'./assets/images/faces/5.jpg',
      name:'Juliana',
      mail:'Juliana@gmail.com',
      phone:'+1(222) 675 4680'
    },
    {
      heart:'line',
      img:'./assets/images/faces/10.jpg',
      name:'Clark',
      mail:'Clark@gmail.com',
      phone:'+1(222) 765 8937'
    },
    {
      heart:'fill',
      img:'./assets/images/faces/21.jpg',
      name:'Stella',
      mail:'Stella4545@gmail.com',
      phone:' +1(222) 890 5687'
    },
    {
      heart:'line',
      img:'./assets/images/faces/4.jpg',
      name:'Angela',
      mail:'Angela1245@gmail.com',
      phone:'+1(222) 972 9883'
    },
    {
      heart:'fill',
      img:'./assets/images/faces/3.jpg',
      name:'Anthony',
      mail:'Anthony@gmail.com',
      phone:' +1(222) 693 7836'
    },
    {
      heart:'fill',
      img:'./assets/images/faces/6.jpg',
      name:'Evelyn',
      mail:'Evelyn2535@gmail.com',
      phone:'+1(222) 972 9883'
    },
    {
      heart:'fill',
      img:'./assets/images/faces/7.jpg',
      name:'Benjamin',
      mail:'Benjamin1452@gmail.com',
      phone:'+1(222) 972 2583'
    },
    {
      heart:'fill',
      img:'./assets/images/faces/17.jpg',
      name:'Isabella',
      mail:'Isabella2541@gmail.com',
      phone:'+1(222) 568 9234'
    },
    {
      heart:'line',
      img:'./assets/images/faces/13.jpg',
      name:'Ronald Hanns',
      mail:'RonaldHanns@gmail.com',
      phone:'+1(222) 568 9356'
    },
    {
      heart:'fill',
      img:'./assets/images/media/media-36.jpg',
      name:'Miller',
      mail:'Miller@gmail.com',
      phone:'+1(222) 568 9994'
    },
    {
      heart:'line',
      img:'./assets/images/media/media-8.jpg',
      name:'Nitheri',
      mail:'Nitheri1452@gmail.com',
      phone:'+1(222) 568 9685'
    },
    
  ]
}
