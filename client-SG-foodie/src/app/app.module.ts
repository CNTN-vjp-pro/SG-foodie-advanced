
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RouterComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
	RouterComponent,
  RegisterFormComponent,
  RestaurantPageComponent,
  FooterComponent,
  LoginPageComponent,
  UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
	BrowserAnimationsModule,
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

