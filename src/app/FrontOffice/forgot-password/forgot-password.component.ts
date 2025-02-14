import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {  

  emailAddress = '';

  onSubmit() {
    // Handle forgot password logic here
    console.log('Email Address:', this.emailAddress);
    // You would typically send this email address to a password reset service.
  }
}
