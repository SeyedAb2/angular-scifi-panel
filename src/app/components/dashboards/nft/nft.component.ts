import {Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import  ApexCharts from 'apexcharts';
import { CarouselModule} from 'ngx-owl-carousel-o';
import { fromEvent } from 'rxjs';
import { SharedModule } from '../../../shared/shared.module';
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BalanceData,StatisticsData} from '../../../shared/data/dashboard_chartData/nftcharts.data';

@Component({
  selector: 'app-nft',
  standalone: true,
  imports: [RouterModule, SharedModule, NgApexchartsModule, CarouselModule, SimplebarAngularModule, NgbModule],
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss'],
})
export class NftComponent  {
  public chartOptions = BalanceData;
  public chartOptions1 = StatisticsData;
}