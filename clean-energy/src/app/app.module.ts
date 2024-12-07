import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { PageSummaryComponent } from './page-summary/page-summary.component';
import { PageReportsComponent } from './page-reports/page-reports.component';
import { PageLoginComponent } from './page-login/page-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    HeroComponent,
    FooterComponent,
    PageDashboardComponent,
    PageSummaryComponent,
    PageReportsComponent,
    PageLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
