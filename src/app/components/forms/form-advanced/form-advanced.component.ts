import { Component, ViewEncapsulation} from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { AngularDualListBoxModule, DualListComponent } from 'angular-dual-listbox';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-advanced', 
  standalone: true,
  imports: [SharedModule,FormsModule,ReactiveFormsModule,NgxMatIntlTelInputComponent,AngularDualListBoxModule,NgSelectModule,MatFormFieldModule,MatButtonModule,MatInputModule],
  templateUrl: './form-advanced.component.html',
  styleUrl: './form-advanced.component.scss',
  encapsulation: ViewEncapsulation.None 
})

export class FormAdvancedComponent  {

  ngOnInit(){
    this.doReset();
	this.companiesNames.forEach((c, i) => {
		this.companies.push({ id: i, name: c });
	});
  }

  cities = [
	{ id: 1, name: 'Lavender' },
	{ id: 2, name: 'Emerald' },
	{ id: 3, name: 'Periwinkle' },
	{ id: 4, name: 'Rose Gold' },
	{ id: 5, name: 'Goldenrod' },	
	{ id: 3, name: 'Amethyst' },
	{ id: 4, name: 'Mint Green' },
	{ id: 5, name: 'Tangerine' },
  ];
  
  selectedCity = this.cities[0].name;

  disabled = false;

 // ngx-mat-intel-input
 myForm: FormGroup | any;
 phoneNumber: any;

 submitPhone() {
   if (this.myForm.valid) {
	 this.phoneNumber = this.myForm.get('phone').value;
   }
 }

 get phoneValue() {
   return this.myForm.controls['phone'];
 }

 constructor(
   private fb: FormBuilder,) {
	 this.myForm = this.fb.group({
	   phone: [undefined, [Validators.required]],
	 });

	 this.myForm = this.fb.group({
		name: 'User',
		phone: '+972789561234'
	  });
  }

  selectedAccounts = ['Tag-1','Tag-2',];
  selectedCompanies =['css', 'html', 'javascript','A+','ABC ALGOL'];
  companies: any[] = [];
  companiesNames = ['css', 'html', 'javascript','A+','ABC ALGOL','ABSET','ABSYS','ACC','Accent','A++'];
  addTagFn(name:any) {
	return { name: name, tag: true };
}

selectedAccounts1 = [];
compareAccounts = (item:any, selected:any) => {
	if (selected.country && item.country) {
		return item.country === selected.country;
	}
	if (item.name && selected.name) {
		return item.name === selected.name;
	}
	return false;
};
accounts = [
	'1','2','3','4','5','6'
] 

  //Dual ListBox
    tab = 1;
	keepSorted = true;
	key!: any;
	display: any;
	filter = false;
	source!: Array<any>;
	confirmed!: Array<any>;
	userAdd = '';
    sourceLeft = true;
	format: any = DualListComponent.DEFAULT_FORMAT;

	private sourceTube!: Array<string>;
	private sourceStations!: Array<any>;
	private sourceChessmen!: Array<any>;

	private confirmedTube!: Array<string>;
	private confirmedStations!: Array<any>;
	private confirmedChessmen!: Array<any>;

  arrayType = [
		{ name: 'Rio Grande', detail: '(object array)', value: 'station' },
		{ name: 'Chessmen', detail: '(object array)', value: 'chess' },
		{ name: 'Underground', detail: '(string array)', value: 'tube' }
	];

  type = this.arrayType[0].value;

	private stations: Array<any> = [
		{ key: 1, station: 'Antonito', state: 'CO' },
		{ key: 2, station: 'Big Horn', state: 'NM' },
		{ key: 3, station: 'Sublette', state: 'NM' },
		{ key: 4, station: 'Toltec', state: 'NM' },
		{ key: 5, station: 'Osier', state: 'CO' },
		{ key: 6, station: 'Chama', state: 'NM'},
		{ key: 7, station: 'Monero', state: 'NM' },
		{ key: 8, station: 'Lumberton', state: 'NM' },
		{ key: 9, station: 'Duice', state: 'NM' },
		{ key: 10, station: 'Navajo', state: 'NM' },
		{ key: 11, station: 'Juanita', state: 'CO' },
		{ key: 12, station: 'Pagosa Jct', state: 'CO' },
		{ key: 13, station: 'Carracha', state: 'CO' },
		{ key: 14, station: 'Arboles', state: 'CO' },
		{ key: 15, station: 'Solidad', state: 'CO' },
		{ key: 16, station: 'Tiffany', state: 'CO' },
		{ key: 17, station: 'La Boca', state: 'CO' },
		{ key: 18, station: 'Ignacio', state: 'CO' },
		{ key: 19, station: 'Oxford', state: 'CO' },
		{ key: 20, station: 'Florida', state: 'CO' },
		{ key: 21, station: 'Bocea', state: 'CO' },
		{ key: 22, station: 'Carbon Jct', state: 'CO' },
		{ key: 23, station: 'Durango', state: 'CO' },
		{ key: 24, station: 'Home Ranch', state: 'CO' },
		{ key: 25, station: 'Trimble Springs', state: 'CO' },
		{ key: 26, station: 'Hermosa', state: 'CO' },
		{ key: 27, station: 'Rockwood', state: 'CO' },
		{ key: 28, station: 'Tacoma', state: 'CO' },
		{ key: 29, station: 'Needleton', state: 'CO' },
		{ key: 30, station: 'Elk Park', state: 'CO' },
		{ key: 31, station: 'Silverton', state: 'CO' },
		{ key: 32, station: 'Eureka', state: 'CO' }
	];

	private chessmen: Array<any> = [
		{ _id: 1, name: 'Pawn' },
		{ _id: 2, name: 'Rook' },
		{ _id: 3, name: 'Knight' },
		{ _id: 4, name: 'Bishop' },
		{ _id: 5, name: 'Queen' },
		{ _id: 6, name: 'King' }
	];
	
  private stationLabel(item: any) {
		return item.station + ', ' + item.state;
	}

	private useStations() {
		this.key = 'key';
		this.display = this.stationLabel;
		this.keepSorted = true;
		this.source = this.sourceStations;
		this.confirmed = this.confirmedStations;
	}

	private useChessmen() {
		this.key = '_id';
		this.display = 'name';
		this.keepSorted = false;
		this.source = this.sourceChessmen;
		this.confirmed = this.confirmedChessmen;
	}

	private useTube() {
		this.key = undefined;
		this.display = undefined;
		this.keepSorted = false;
		this.source = this.sourceTube;
		this.confirmed = this.confirmedTube;
	}


	doReset() {
		this.sourceChessmen = JSON.parse(JSON.stringify(this.chessmen));
		this.sourceStations = JSON.parse(JSON.stringify(this.stations));
		this.confirmedChessmen = new Array<any>();
		this.confirmedStations = new Array<any>();
		this.confirmedTube = new Array<string>();

		// Preconfirm some items.
		this.confirmedStations.push( this.stations[31] );


		switch (this.type) {
		case this.arrayType[0].value:
			this.useStations();
			break;
		case this.arrayType[1].value:
			this.useChessmen();
			break;
		case this.arrayType[2].value:
			this.useTube();
			break;
		}
	}
}
