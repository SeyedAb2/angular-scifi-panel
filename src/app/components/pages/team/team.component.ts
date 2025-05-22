import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MemberTeamCardComponent } from '../../../shared/components/basic/member-team-card/member-team-card.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [SharedModule,SimplebarAngularModule,MemberTeamCardComponent,NgSelectModule,NgbModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  closeResult!: string;

	constructor(private modalService: NgbModal) {}
  
  openWindowCustomClass(content: any) {
		this.modalService.open(content, { windowClass: 'dark-modal',centered:true });
  }

  teamData = [
    {
      src:'./assets/images/faces/11.jpg',
      name :'NoahFisher',
      mail:'noahfisher041@gmail.com'
    },
    {
      src:'./assets/images/faces/2.jpg',
      name :'Isabella Rose',
      mail:'isabellarose98@gmail.com'
    },
    {
      src:'./assets/images/faces/4.jpg',
      name :'Nitheri Morgan',
      mail:'Nitherimorgan45@gmail.com'
    },
    {
      src:'./assets/images/faces/10.jpg',
      name :'EthanClark',
      mail:'ethanclark111@gmail.com'
    },
    {
      src:'./assets/images/faces/13.jpg',
      name :'Jackson Taylor',
      mail:'jacksontaylor00@gmail.com'
    },
    {
      src:'./assets/images/faces/5.jpg',
      name :'Amelia Grace',
      mail:'ameliagrace16@gmail.com'
    },
    {
      src:'./assets/images/faces/8.jpg',
      name :'Natalie Miller',
      mail:'nataliemiller2135@gmail.com'
    },
    {
      src:'./assets/images/faces/15.jpg',
      name :'Evelyn Anna',
      mail:'liamanderson52@gmail.com'
    },
  ]
}
