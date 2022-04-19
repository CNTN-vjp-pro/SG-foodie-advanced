import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SecurityPolicyPageComponent } from './security-policy-page/security-policy-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CategoricalPageComponent } from './categorical-page/categorical-page.component';
import { BookingProgressbarStep2Component } from './booking-progressbar-step2/booking-progressbar-step2.component';
import { BookingProgressbarStep1Component } from './booking-progressbar-step1/booking-progressbar-step1.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SecurityPolicyPageComponent,
    NavigationBarComponent,
    CategoricalPageComponent,
    BookingProgressbarStep2Component,
    BookingProgressbarStep1Component
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
