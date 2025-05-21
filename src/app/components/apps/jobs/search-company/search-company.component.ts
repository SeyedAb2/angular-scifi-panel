import { Component, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/shared.module';
export interface SearchCompanyType {
  id: number;
  logo: string;
  title: string;
  location: string;
  year: number;
  rating: string;
  reviews: number;
  noofemp: number;
  vacancies: number;
  posted:string
}
@Component({
  selector: 'app-search-company',
  standalone: true,
  imports: [SharedModule,NgbModule,NgSelectModule],
  templateUrl: './search-company.component.html',
  styleUrl: './search-company.component.scss'
})
export class SearchCompanyComponent {

  // @Input() companyArr!:SearchCompanyType[];
  [x: string]: any;
  constructor() {}
  companydata: SearchCompanyType[] = [
    //**.1 Object *//
    {
      id: 1,
      logo: './assets/images/company-logos/1.png',
      title: 'Innovatepix Co.in',
      location: 'Paris, France',
      year: 1996,
      posted:'Posted 3 Days ago',
      rating: '',
      reviews: 142,
      noofemp: 345,
      vacancies: 50,
    },
    //**.2 Object *//
    {
      id: 1,
      logo: './assets/images/company-logos/2.png',
      title: '  FutureBud Solutions ',
      location: 'Dubai, UAE',
      year: 2015,
      posted:'Posted 3 Days ago',
      rating: '',
      reviews: 134,
      noofemp: 146,
      vacancies: 0,
    },

    //**.3 Object *//
    {
      id: 1,
      logo: './assets/images/company-logos/3.png',
      title: ' TechicGen PVT LTD ',
      location: 'London, UK,',
      year: 2013,
      posted:'Posted 2 Days ago',
      rating: '',
      reviews: 234,
      noofemp: 146,
      vacancies: 40,
    },
    //**.4 Object *//
    {
      id: 1,
      logo: './assets/images/company-logos/7.png',
      title: '  Pinnacle Apex Solutions ',
      location: 'Sydney, Australia,',
      year: 2002,
      posted:'Posted 3 Days ago',
      rating: '4.5',
      reviews: 239,
      noofemp: 120,
      vacancies: 10,
    },
    //**.5 Object *//
    {
      id: 1,
      logo: './assets/images/company-logos/5.png',
      title: '  Renith Innovations Corp. ',
      location: 'Sydney, Australia,',
      year: 2017,
      posted:'Posted 2 Days ago',
      rating: '',
      reviews: 239,
      noofemp: 120,
      vacancies: 10,
    },
    //**.6 Object *//
    {
      id: 6,
      logo: './assets/images/company-logos/6.png',
      title: ' Vista Nexus Technologies ',
      location: 'Tokyo, Japa,',
      year: 2000,
      posted:'Posted 3 Days ago',
      rating: '',
      reviews: 764,
      noofemp: 120,
      vacancies: 10,
    },
    {
      id: 7,
      logo: './assets/images/company-logos/7.png',
      title: 'Innovatepix Co.in  ',
      location: 'Paris, France,',
      year: 2000,
      posted:'Posted 5 Days ago',
      rating: '',
      reviews: 764,
      noofemp: 120,
      vacancies: 10,
    },
    {
      id: 8,
      logo: './assets/images/company-logos/8.png',
      title: ' FutureBud Solutions ',
      location: 'Mumbai, India,',
      year: 2000,
      posted:'Posted 1 Days ago',
      rating: '',
      reviews: 764,
      noofemp: 120,
      vacancies: 10,
    },
  ];
  // Collapsecode
  public isCollapsed = true;
  public isCollapsed1 = true;

}
