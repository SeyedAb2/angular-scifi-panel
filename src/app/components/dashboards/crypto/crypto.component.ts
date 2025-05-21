import {Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersData, RevenueData, TezosData, XRPData,CurrencyPriceData ,PredictionData} from '../../../shared/data/dashboard_chartData/cryptocharts.data';
import { sparkChartData1, sparkChartData2, sparkChartData3, sparkChartData4, sparkChartData5 } from '../../../shared/data/dashboard_chartData/gammingcharts.data';
import { sparkChartData6 } from '../../../shared/data/dashboardCharts.data';
import { MaterialModuleModule } from '../../../material-module/material-module.module';

@Component({
  selector: 'app-crypto',
  standalone: true,
  imports: [RouterModule,SharedModule,NgApexchartsModule,NgSelectModule,FormsModule,ReactiveFormsModule,NgbModule,MaterialModuleModule],
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent {
  public chartOptions = RevenueData;
  public chartOptions1 = CustomersData;
  public chartOptions2 = TezosData;
  public chartOptions3 =  XRPData;
  public chartOptions4 = CurrencyPriceData;
  public chartOptions5 = PredictionData
  public chartOptions6 = sparkChartData1;
  public chartOptions7 = sparkChartData2;
  public chartOptions8 = sparkChartData3;
  public chartOptions9 = sparkChartData4;
  public chartOptions10 = sparkChartData5;
  public chartOptions11 = sparkChartData6;
  public chartOptions12 = sparkChartData1;

  basePath:any;
  heroForm!: FormGroup;

  constructor(
      private fb: FormBuilder) {
  }

  ngOnInit() {
      this.basePath = window.location.host.includes('localhost') ? '' : '/ng-select';
      this.heroForm = this.fb.group({
          
          heroId: 'Bitcoin',
          agree: null
      });
  }

}
