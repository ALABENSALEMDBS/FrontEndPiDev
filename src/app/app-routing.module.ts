import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './FrontOffice/home/home.component';
import { LoginComponent } from './FrontOffice/login/login.component';
import { SignupComponent } from './FrontOffice/signup/signup.component';
import { ForgotPasswordComponent } from './FrontOffice/forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
 {path:'home', component:HomeComponent} ,
 {path:'login', component:LoginComponent} ,
 {path:'signup', component:SignupComponent} ,
 {path:'forgotpassword', component:ForgotPasswordComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
