import { Component, HostListener } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexRandomData, NewEventData,CompleteEventData,PendingEventData,UnsolvedEventData
  ,SafeZoneChartData,EnergyChartData,AirSupportChartData,sparkChartData1,sparkChartData2,sparkChartData3
  ,sparkChartData4,sparkChartData5,TimeSpendChartData,PopulationSupportChartData,PopulationChartData,playersChartData,
  DangerZoneChartData} from '../../../shared/data/dashboard_chartData/gammingcharts.data';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, tileLayer } from 'leaflet';
@Component({
  selector: 'app-gaming',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule,NgbModule,LeafletModule],
  templateUrl: './gaming.component.html',
  styleUrl: './gaming.component.scss'
})
export class GamingComponent {
  public RandomData = ApexRandomData;
  public chartOptions = NewEventData;
  public chartOptions1 = CompleteEventData;
  public chartOptions2 = PendingEventData;
  public chartOptions3 = UnsolvedEventData;
  public chartOptions4 = SafeZoneChartData;
  public chartOptions5 = DangerZoneChartData;
  public chartOptions6 = EnergyChartData;
  public chartOptions7 = AirSupportChartData;
  public chartOptions8 = sparkChartData1;
  public chartOptions9 = sparkChartData2;
  public chartOptions10 = sparkChartData3;
  public chartOptions11 = sparkChartData4;
  public chartOptions12 = sparkChartData5;
  public chartOptions13 = TimeSpendChartData;
  public chartOptions14 = PopulationChartData;
  public chartOptions15 = PopulationSupportChartData;
  public chartOptions16 = playersChartData;
 constructor(){
  let html = document.querySelector('html');
  html?.setAttribute('data-theme-mode','dark');
  html?.setAttribute('data-card-background','background1');
  html?.setAttribute('data-vertical-style','detached');
  let body = document.querySelector('body');
  body?.classList.remove('authentication-background');
 }
 public generateData(
  baseval: number,
  count: number,
  yrange: { min: number; max: number }
) {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}
center = latLng([46.879966, -121.726909]);
options = {
  layers: [
    tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Open Street Map',
    }),
  ],
  zoom: 5,
  center: latLng(this.center),
};

get width() {
  return window.innerWidth;
}

@HostListener('resize')
onMapReady(map: any) {
  setTimeout(() => map.invalidateSize(), 1);
}
}
