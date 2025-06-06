import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/shared.module';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-formselect',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FormsModule,ReactiveFormsModule],
  templateUrl: './formselect.component.html',
  styleUrl: './formselect.component.scss'
})
export class FormselectComponent {
  
  selectedCompanies: any;
  companies: any[] = [];
  companiesNames = ['Uber', 'Microsoft', 'Flexigen'];
  month$!: Observable<any[]>;
  selectedMonth = '6';
  selectedAccount = 'AZ';
  email: string = '';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  
  ngOnInit() {
    this.companiesNames.forEach((c, i) => {
      this.companies.push({ id: i, name: c });
    });
  }

  options = [
    { name: 'Zero', value: 0 },
    { name: 'One', value: 1 },
    { name: 'Two', value: 2 },
    // Add more options as needed
  ];

  accounts = [
    {
      name: 'Arizona',
      value: 'AZ',
      country: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Colorado',
      value: 'CO',
      country: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Idaho',
      value: 'ID',
      country: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Montana',
      value: 'MT',
      country: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Nebraska',
      value: 'NE',
      country: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'New Mexico',
      value: 'NM',
      country: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'North Dakota',
      value: 'AZ',
      country: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Utah',
      value: 'UT',
      country: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Wyoming',
      value: 'WY',
      country: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Alabama',
      value: 'AL',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Arkansas',
      value: 'AR',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Illinois',
      value: 'IL',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Iowa',
      value: 'IA',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Kansas',
      value: 'KS',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Kentucky',
      value: 'KY',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Louisiana',
      value: 'LA',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Minnesota',
      value: 'MN',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Mississippi',
      value: 'MS',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Missouri',
      value: 'MO',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Oklahoma',
      value: 'OK',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'South Dakota',
      value: 'SD',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Texas',
      value: 'TX',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Tennessee',
      value: 'TN',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Wisconsin',
      value: 'WI',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
  ];

  addTagFn(name: any) {
    return { name: name, tag: true };
  }

  selectedAccounts = [{ name: 'Adam' }];
  compareAccounts = (item: any, selected: any) => {
    if (selected.country && item.country) {
      return item.country === selected.country;
    }
    if (item.name && selected.name) {
      return item.name === selected.name;
    }
    return false;
  };

  hideselectedAccounts = [{ name: 'Adam' }];
  hidecompareAccounts = (item: any, selected: any) => {
    if (selected.country && item.country) {
      return item.country === selected.country;
    }
    if (item.name && selected.name) {
      return item.name === selected.name;
    }
    return false;
  };
  selectedUniqueValue = ['child-1','child-2']
  
  selectedgroup = 'Adam';
  groups = [
      { name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States', child: { state: 'Active' } },
      { name: 'Homer', email: 'homer@email.com', age: 47, country: '', child: { state: 'Active' } },
      { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States', child: { state: 'Active' } },
      { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina', child: { state: 'Active' } },
      { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina', child: { state: 'Active' } },
      { name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador', child: { state: 'Active' } },
      { name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador', child: { state: 'Inactive' } },
      { name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador', child: { state: 'Inactive' } },
      { name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia', child: { state: 'Inactive' } },
      { name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia', child: { state: 'Inactive' } },
      { name: 'Nicolás', email: 'nicole@email.com', age: 43, country: 'Colombia', child: { state: 'Inactive' } }
  ];
  showattributeName = [{ name: 'one' }];
  MultipleAttribute = (item: any, selected: any) => {
    if (selected.country && item.country) {
      return item.country === selected.country;
    }
    if (item.name && selected.name) {
      return item.name === selected.name;
    }
    return false;
  };
}
