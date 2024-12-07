import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageReportsComponent } from './page-reports/page-reports.component';
import { PageSummaryComponent } from './page-summary/page-summary.component';



const routes: Routes = [
  { path: '',
    component: PageLoginComponent
  }, 
  {
    path: 'login',
    component: PageLoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: PageDashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'report',
    component: PageReportsComponent,
    pathMatch: 'full'
  },
  {
    path: 'summary',
    component: PageSummaryComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageLoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
