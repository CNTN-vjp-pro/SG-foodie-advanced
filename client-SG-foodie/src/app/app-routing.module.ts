import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoricalPageComponent } from './categorical-page/categorical-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { SecurityPolicyPageComponent } from './security-policy-page/security-policy-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
const routes: Routes = [
	{path:'',redirectTo:'home-page',pathMatch:"full"},
	{path:'home-page',component:HomePageComponent},
	{path:'security-policy',component: SecurityPolicyPageComponent}, 
	{path:'about-us',component: AboutUsPageComponent}, 
	{path:'category/:category',component:CategoricalPageComponent},
	{path:'login', component:LoginPageComponent},
	{path:':id',component:RestaurantPageComponent},
	{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouterComponent = [SecurityPolicyPageComponent,HomePageComponent,NavigationBarComponent,CategoricalPageComponent,RestaurantPageComponent,PageNotFoundComponent,AboutUsPageComponent]


