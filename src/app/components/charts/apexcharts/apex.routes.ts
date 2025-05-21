
      import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
      
      export const admin: Routes = [  
       {path:'charts/apex-charts',children:[ 
        {
        path: 'line-charts',
        loadComponent: () =>
          import('./line-charts/line-charts.component').then((m) => m.LineChartsComponent),
          title: 'SCIFI - Line Charts'
      },
      {
        path: 'area-charts',
        loadComponent: () =>
          import('./area-charts/area-charts.component').then((m) => m.AreaChartsComponent),
          title: 'SCIFI - Area Charts'
      },
     {
        path: 'bar-charts',
        loadComponent: () =>
          import('./bar-charts/bar-charts.component').then((m) => m.BarChartsComponent),
          title: 'SCIFI - Bar Charts'
      },  {
        path: 'column-charts',
        loadComponent: () =>
          import('./column-charts/column-charts.component').then((m) => m.ColumnChartsComponent),
          title: 'SCIFI - Column Charts'
      },  {
        path: 'mixedcharts',
        loadComponent: () =>
          import('./mixedcharts/mixedcharts.component').then((m) => m.MixedchartsComponent),
          title: 'SCIFI -  MIxed Charts'
      },  {
        path: 'rangeareacharts',
        loadComponent: () =>
          import('./rangeareacharts/rangeareacharts.component').then((m) => m.RangeareachartsComponent),
          title: 'SCIFI - Range Charts'
      },  {
        path: 'timelinecharts',
        loadComponent: () =>
          import('./timelinecharts/timelinecharts.component').then((m) => m.TimelinechartsComponent),
          title: 'SCIFI - TimeLine Charts'
      }, 
      {
        path: 'funnel-charts',
        loadComponent: () =>
          import('./funnel-charts/funnel-charts.component').then((m) => m.FunnelChartsComponent),
          title: 'SCIFI - Funnel Charts'
      }, {
        path: 'candlestickcharts',
        loadComponent: () =>
          import('./candlestickcharts/candlestickcharts.component').then((m) => m.CandlestickchartsComponent),
          title: 'SCIFI - CandleStick Charts'
      },  {
        path: 'boxplotcharts',
        loadComponent: () =>
          import('./boxplotcharts/boxplotcharts.component').then((m) => m.BoxplotchartsComponent),
          title: 'SCIFI - Box Plot Charts'
      },
      {
        path: 'bubblecharts',
        loadComponent: () =>
          import('./bubblecharts/bubblecharts.component').then((m) => m.BubblechartsComponent),
          title: 'SCIFI - Bubble Charts'
      },  {
        path: 'scattercharts',
        loadComponent: () =>
          import('./scattercharts/scattercharts.component').then((m) => m.ScatterchartsComponent),
          title: 'SCIFI - Scatter Charts'
      },  {
        path: 'heatmapcharts',
        loadComponent: () =>
          import('./heatmapcharts/heatmapcharts.component').then((m) => m.HeatmapchartsComponent),
          title: 'SCIFI - HeatMap Charts'
      },  {
        path: 'treemapcharts',
        loadComponent: () =>
          import('./treemapcharts/treemapcharts.component').then((m) => m.TreemapchartsComponent),
          title: 'SCIFI - TreeMap Charts'
      },  {
        path: 'piecharts',
        loadComponent: () =>
          import('./piecharts/piecharts.component').then((m) => m.PiechartsComponent),
          title: 'SCIFI - Pie Charts'
      },  {
        path: 'radialbarcharts',
        loadComponent: () =>
          import('./radialbarcharts/radialbarcharts.component').then((m) => m.RadialbarchartsComponent),
          title: 'SCIFI - Radial Charts'
      },  {
        path: 'radarcharts',
        loadComponent: () =>
          import('./radarcharts/radarcharts.component').then((m) => m.RadarchartsComponent),
          title: 'SCIFI - Radar Charts'
      },
      {
        path: 'polarareacharts',
        loadComponent: () =>
          import('./polarareacharts/polarareacharts.component').then((m) => m.PolarareachartsComponent),
          title: 'SCIFI - Polar Area Charts'
      },
      
      ]}
      ];
      @NgModule({
        imports: [RouterModule.forChild(admin)],
        exports: [RouterModule],
      })
      export class apexchartsRoutingModule {
        static routes = admin;
      }