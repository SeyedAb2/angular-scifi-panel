import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Company, data } from '../../../shared/data/table_data/easy_table';
import {
  API,
  APIDefinition,
  Columns,
  Config,
  DefaultConfig,
  TableModule,
} from 'ngx-easy-table';
import { SharedModule } from '../../../shared/shared.module';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-ngx-easy-table',
  standalone: true,
  imports: [SharedModule,TableModule,NgbCollapseModule],
  templateUrl: './ngx-easy-table.component.html',
  styleUrl: './ngx-easy-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NgxEasyTableComponent {

  isCollapsed = false;
  
  public configuration!: Config;
  public configuration1!: Config;
  public configuration2!: Config;
  public columns!: Columns[];
  public data: Company[] = [];
  @ViewChild('table')
  table!: APIDefinition;
  paginationEnabled: boolean = true;

  // data: Company[] = [];
  // public configuration: Config;

  ngOnInit(): void {
    this.columns = [
      { key: 'level', title: 'Level' },
      { key: 'age', title: 'Age' },
      { key: 'company', title: 'Company' },
      { key: 'name', title: 'Name' },
      { key: 'isActive', title: 'STATUS' },
    ];

    this.data = data;
    this.configuration = { ...DefaultConfig };
    this.configuration.paginationEnabled = false;

    this.configuration1 = { ...DefaultConfig };
   
    this.configuration2 = { ...DefaultConfig };
    this.configuration2.rowReorder = true;
    this.configuration2.columnReorder = true;
    this.configuration2.fixedColumnWidth = false
  }
  onChange(event: Event): void {
    this.table.apiEvent({
      type: API.onGlobalSearch,
      value: (event.target as HTMLInputElement).value,
    });
  }

  sortByLastName(asc: boolean): void {}

  sortByLevel(asc: boolean): void {}

  eventEmitted($event: { event: string; value: any }): void {}
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit2(): void {
    this.columns = [
      { key: 'level', title: 'Level' },
      { key: 'age', title: 'Age' },
      { key: 'company', title: 'Company' },
      { key: 'name', title: 'Name' },
      { key: 'isActive', title: 'STATUS' },
    ];

    
    this.data = data;
    this.configuration = { ...DefaultConfig };
    this.configuration.infiniteScroll = true;
    this.configuration.paginationEnabled = false;
    this.configuration.infiniteScrollThrottleTime = 5;
    this.configuration.rows = 5;
  }
  
  onEvent($event: { event: Event | string; value: any }): void {
    if ($event.event === 'onInfiniteScrollEnd') {
      // Handle onInfiniteScrollEnd event
      this.data = [...this.data, ...this.data];
      this.cdr.detectChanges();
    }
  }

}
