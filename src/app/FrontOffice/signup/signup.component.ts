import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  balloons: { left: number, speed: number }[] = [];

  ngOnInit(): void {
    this.generateBalloons();
  }

  fullName = '';
  emailAddress = '';
  password = '';
  agreeTerms = false;

  onSubmit() {
    // Handle signup logic here
    console.log('Full Name:', this.fullName);
    console.log('Email Address:', this.emailAddress);
    console.log('Password:', this.password);
    console.log('Agree to Terms:', this.agreeTerms);
    // You would typically send this data to a registration service.
  }


  generateBalloons(): void {
    for (let i = 0; i < 7; i++) {
      this.balloons.push({
        left: Math.random() * 100, // Position aléatoire
        speed: 5 + Math.random() * 5 // Vitesse entre 5s et 10s
      });
    }
  }
}
