import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './FrontOffice/header/header.component';
import { HomeComponent } from './FrontOffice/home/home.component';
import { LoginComponent } from './FrontOffice/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './FrontOffice/signup/signup.component';
import { ForgotPasswordComponent } from './FrontOffice/forgot-password/forgot-password.component';
import { FooterComponent } from './FrontOffice/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
