import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { FlatpickrModule } from 'angularx-flatpickr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { environment } from '../environments/environment';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { TableModule } from "ngx-easy-table";
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AppStateService } from './shared/services/app-state.service';
import { DragulaModule } from 'ng2-dragula';
import Aura from '@primeng/themes/aura';
import { AuraBaseDesignTokens } from '@primeng/themes/aura/base';
import { Preset } from '@primeng/themes/types';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideCharts(withDefaultRegisterables()),
    RouterOutlet,
    ColorPickerModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,  
    AngularFireModule,
    ColorPickerService,
    ToastrService,
    TableModule,
    NgbCollapseModule,
    importProvidersFrom(
      AppStateService,
      DragulaModule.forRoot(),
      FlatpickrModule.forRoot(),
      ToastrModule.forRoot(),
      CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory,
      }),
      AngularFireModule.initializeApp(environment.firebase),
      BrowserAnimationsModule  
    ),]
};

