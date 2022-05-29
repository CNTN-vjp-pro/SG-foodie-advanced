
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RouterComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CategoricalPageComponent } from './categorical-page/categorical-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { FooterComponent } from './footer/footer.component';
// import { BookingProgressbarStep1Component } from './booking-progressbar-step1/booking-progressbar-step1.component';
// import { BookingProgressbarStep2Component } from './booking-progressbar-step2/booking-progressbar-step2.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
	RouterComponent,
  RegisterFormComponent,
  CategoricalPageComponent,
  PageNotFoundComponent,
  RestaurantPageComponent,
  FooterComponent,
  LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

