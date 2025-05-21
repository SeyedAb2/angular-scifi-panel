import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select2',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FormsModule,ReactiveFormsModule,NgSelectModule,NgbModule],
  templateUrl: './select2.component.html',
  styleUrls: ['./select2.component.scss']
})
export class Select2Component {

  isCollapsed = false;

  selectedItems: string[] = ['p-1', 'p-2']; // Initially selected items, adjust as needed

  onChange(selectedItems: string[]): void {
    // Limit the selection to 3 items
    if (selectedItems.length > 3) {
      // If more than 3 items are selected, remove the last item
      this.selectedItems = selectedItems.slice(0, 3);
    } else {
      this.selectedItems = selectedItems;
    }
  }

  selectTemplate = 'Select Cars';
  selectedSimpleItem = 'Selection-1';
  simpleItems: any = [];
  multipleSelect = ['Multiple-1'];
  multiple = [
    { id: 1, name: 'Multiple-2' },
    { id: 2, name: 'Multiple-3'},
    { id: 3, name: 'Multiple-4' },
    { id: 4, name: 'Multiple-5' },
  ];
  //max selecting Limiting
  simpleItems2: any = [];
  selectedCars2 = ['Volvo'];
  cars2 = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab', disabled: true },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  // singel select
  selectedSimpleItem1 = 'Select city';
  simpleItems1: any = [];
  selectCity = [];

  //Multiple Select With placeholders
  multipleSelect2 = 'Kavin';
  multiple2 = [
    { id: 1, name: 'Maya' },
    { id: 2, name: 'Brodus' },
    { id: 3, name: 'Goldhens' },
    { id: 4, name: 'Angelina' },
    { id: 5, name: 'Kavin' },
  ];


  //Templating
  cities1 = [
    {
      id: 1,
      name: 'Andrew',
      avatar: './assets/images/faces/select2/p-5.jpg',
    },
    {
      id: 2,
      name: 'Maya',
      avatar: './assets/images/faces/select2/p-4.jpg',
    },
    {
      id: 3,
      name: 'Brodus Axel',
      avatar: './assets/images/faces/select2/p-2.jpg',
    },
    {
      id: 4,
      name: 'Goldens',
      avatar: './assets/images/faces/select2/p-1.jpg',
    },
    {
      id: 5,
      name: 'Angelina',
      avatar: './assets/images/faces/select2/p-2.jpg',
    },
  ];

  selectedCity = this.cities1[0].name;
  //Templating Selectiones
  cities2 = [
    {
      id: 1,
      name: 'Andrew',
      avatar: './assets/images/faces/select2/p-5.jpg',
    },
    {
      id: 2,
      name: 'Maya',
      avatar: './assets/images/faces/select2/p-4.jpg',
    },
    {
      id: 3,
      name: 'Brodus Axel',
      avatar: './assets/images/faces/select2/p-2.jpg',
    },
    {
      id: 4,
      name: 'Goldens',
      avatar: './assets/images/faces/select2/p-1.jpg',
    },
    {
      id: 5,
      name: 'Angelina',
      avatar: './assets/images/faces/select2/p-2.jpg',
    },
  ];

  selectedCity1 = this.cities2[0].name ;

  // Disable and select contorl
  selectedSimpleItem3= 'Selection-1';
  simpleItems3: any = [];

  selectedSection = ['Selection-1'];
  Section= [
    { id: 1, name: 'Selection-2' },
    { id: 2, name: 'Selection-3'},
    { id: 3, name: 'Selection-4' },
    { id: 4, name: 'Selection-5' },
  ];
  isCarsDisabled = false;

  ngOnInit() {
    this.simpleItems = [
      'Selection-1',
      'Selection-2',
      'Selection-3',
      'Selection-4',
      'Selection-5',
    ];
    this.simpleItems1 = [
      'Select city',
      'Texas',
      'Geogia',
      'California',
      'Washington D C',
      'Virigine',
    ];
    this.simpleItems3= [
      'Selection-1',
      'Selection-2',
      'Selection-3',
      'Selection-4',
      'Selection-5',
    ];
  }
 
  enable() {
    this.isCarsDisabled = false;
  }
  disable(){
    this.isCarsDisabled = !this.isCarsDisabled;
  }
  filterCities(searchValue: string) {
    // Filter the cities based on the searchValue and update the 'cities1' array
    this.cities1 = this.filterCitiesArray(searchValue);
  }
  
  filterCitiesArray(searchValue: string) {
    // Implement your filtering logic here and return the filtered array
    return this.cities1.filter(city => city.name.toLowerCase().includes(searchValue.toLowerCase()));
  }
  
 
}
