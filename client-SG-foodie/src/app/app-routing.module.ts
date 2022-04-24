import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoricalPageComponent } from './categorical-page/categorical-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SecurityPolicyPageComponent } from './security-policy-page/security-policy-page.component';
const routes: Routes = [
	{path:'',redirectTo:'home-page',pathMatch:"full"},
	{path:'home-page',component:HomePageComponent},
	{path:'security-policy',component: SecurityPolicyPageComponent}, 
	{path:'category/:category',component:CategoricalPageComponent}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouterComponent = [SecurityPolicyPageComponent,HomePageComponent,NavigationBarComponent,CategoricalPageComponent]