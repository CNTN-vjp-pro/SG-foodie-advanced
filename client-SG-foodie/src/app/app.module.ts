
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RouterComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ToastrModule } from 'ngx-toastr';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
@NgModule({
  declarations: [
    AppComponent,
	RouterComponent,
  RegisterFormComponent,
  RestaurantPageComponent,
  FooterComponent,
  LoginPageComponent,
  UserProfileComponent,
  AdminHomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
	ToastrModule.forRoot({
		timeOut:3000,
		progressBar:true,
		progressAnimation:"increasing",
		preventDuplicates:true
	}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

