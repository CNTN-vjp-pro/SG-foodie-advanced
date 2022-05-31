import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoricalPageComponent } from './categorical-page/categorical-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { SecurityPolicyPageComponent } from './security-policy-page/security-policy-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import{FooterComponent} from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserBookingHistoryComponent } from './user-booking-history/user-booking-history.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { AdminCategoricalPageComponent } from './admin-categorical-page/admin-categorical-page.component';
const routes: Routes = [
	{path:'',redirectTo:'home-page',pathMatch:"full"},
	{path:'home-page',component:HomePageComponent},
	{path:'security-policy',component: SecurityPolicyPageComponent}, 
	{path:'about-us',component: AboutUsPageComponent}, 
	{path:'category/:category',component:CategoricalPageComponent},
  	{path:'restaurant/:id',component:RestaurantPageComponent},   
	{path:'booking-page/:id',component:BookingPageComponent},
	{path:'login', component:LoginPageComponent},
	{path: 'register', component:RegisterFormComponent},
	{path: 'user-profile', component:UserProfileComponent},
	{path: 'user-booking-history', component:UserBookingHistoryComponent},
	{path:'admin/home-page', component:AdminHomePageComponent},
	{path:'admin/category/:category',component: AdminCategoricalPageComponent},
	{path:'**',pathMatch: 'full',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouterComponent = [SecurityPolicyPageComponent,HomePageComponent,NavigationBarComponent,CategoricalPageComponent,RestaurantPageComponent,PageNotFoundComponent,AboutUsPageComponent,BookingPageComponent,FooterComponent, LoginPageComponent, RegisterFormComponent,UserBookingHistoryComponent, AdminHomePageComponent, AdminCategoricalPageComponent]

