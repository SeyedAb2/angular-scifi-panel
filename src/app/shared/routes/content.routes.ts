import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { admin, dashboardRoutingModule } from '../../components/dashboards/dashboard.routes';
import { blogRoutingModule } from '../../components/pages/blog/blog.routes';
import { advanceduiRoutingModule } from '../../components/advancedui/advancedui.routes';
import { pagesRoutingModule } from '../../components/pages/pages.routes';
import { ecommerceRoutingModule } from '../../components/apps/ecommerce/ecommerce.routes';
import { filemanagerRoutingModule } from '../../components/apps/file-manager/filemanager.routes';
import { invoiceRoutingModule } from '../../components/pages/invoice/invoice.routes';
import { chartsRoutingModule } from '../../components/charts/charts.routes';
import { apexchartsRoutingModule } from '../../components/charts/apexcharts/apex.routes';
import { mailRoutingModule } from '../../components/pages/email/email.routes';
import { uielementsRoutingModule } from '../../components/uielements/uielements.routes';
import { utilitiesRoutingModule } from '../../components/utilities/utilities.routes';
import { appsRoutingModule } from '../../components/apps/apps.routes';
import { taskRoutingModule } from '../../components/apps/task/task.routes';  
import { crmRoutingModule } from '../../components/apps/crm/crm.routes';
import { cryptoRoutingModule } from '../../components/apps/crypto/crypto.routes';
import { jobsRoutingModule } from '../../components/apps/jobs/jobs.routes';
import { projectsRoutingModule } from '../../components/apps/projects/projects.routes';
import { nftRoutingModule } from '../../components/apps/nft/nft.routes';
import { FormEditorsRoutingModule } from '../../components/forms/form-editors/form-editors.routes';
import { formelementsRoutingModule } from '../../components/forms/form-elements/form-elements.routes';
import { formsRoutingModule } from '../../components/forms/forms.routes';
import { mapsRoutingModule } from '../../components/maps/maps.routes';
import { iconsRoutingModule } from '../../components/icons/icons.routes';
import { widgetsRoutingModule } from '../../components/widgets/widgets.routes';
import { tablesRoutingModule } from '../../components/tables/tables.routes';
import { humanResourceRoutingModule } from '../../components/human-resource/human-resource.routes';

 export const content: Routes = [

   { path: '', children: [
   ...dashboardRoutingModule.routes,
   ...humanResourceRoutingModule.routes,
   ...advanceduiRoutingModule.routes,
   ...pagesRoutingModule.routes,
   ...ecommerceRoutingModule.routes,
   ...filemanagerRoutingModule.routes,
   ...invoiceRoutingModule.routes,
   ...chartsRoutingModule.routes,
   ...tablesRoutingModule.routes,
   ...apexchartsRoutingModule.routes,
   ...blogRoutingModule.routes,
   ...mailRoutingModule.routes,
   ...uielementsRoutingModule.routes,
   ...utilitiesRoutingModule.routes,
   ...appsRoutingModule.routes,
   ...crmRoutingModule.routes,
   ...cryptoRoutingModule.routes,
   ...jobsRoutingModule.routes,
   ...projectsRoutingModule.routes,
   ...taskRoutingModule.routes,
   ...nftRoutingModule.routes,
   ...FormEditorsRoutingModule.routes,
   ...formelementsRoutingModule.routes,
   ...formsRoutingModule.routes,
   ...mapsRoutingModule.routes,
   ...iconsRoutingModule.routes,
   ...widgetsRoutingModule.routes
  ]}
];

@NgModule({
    imports: [RouterModule.forRoot(content, {
      scrollPositionRestoration: 'top'
    })],
    exports: [RouterModule]
})
export class SaredRoutingModule { }
