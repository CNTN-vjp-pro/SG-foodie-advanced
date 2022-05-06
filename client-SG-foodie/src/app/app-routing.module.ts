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
const routes: Routes = [
	{path:'',redirectTo:'home-page',pathMatch:"full"},
	{path:'home-page',component:HomePageComponent},
	{path:'security-policy',component: SecurityPolicyPageComponent}, 
	{path:'category/:category',component:CategoricalPageComponent},
  {path:'restaurant/:id',component:RestaurantPageComponent},   
	{path:'booking-page/:id',component:BookingPageComponent},
	{path:'**',pathMatch: 'full',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouterComponent = [SecurityPolicyPageComponent,HomePageComponent,NavigationBarComponent,CategoricalPageComponent,RestaurantPageComponent,PageNotFoundComponent,BookingPageComponent,FooterComponent]


