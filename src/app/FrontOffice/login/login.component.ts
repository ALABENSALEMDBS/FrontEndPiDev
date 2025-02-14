import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  balloons: { left: number, speed: number }[] = [];


  generateBalloons(): void {
    for (let i = 0; i < 7; i++) {
      this.balloons.push({
        left: Math.random() * 100, // Position aléatoire
        speed: 5 + Math.random() * 5 // Vitesse entre 5s et 10s
      });
    }
  }
  
  backgroundImageUrl: string = '';  // Declare the property
  private intervalSubscription: Subscription | undefined;
  backgroundImages: string[] = [
    'https://la1ere.francetvinfo.fr/image/eWbIHbjJBIp0epT1N_Rt-LgznIU/930x620/outremer/2025/02/02/coupe-de-france-football-png-679efcaa6e629933680521.webp',
    'https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg',
    'https://png.pngtree.com/background/20210710/original/pngtree-background-of-american-football-stadium-lighting-effect-picture-image_981574.jpg',
    'https://thumbs.dreamstime.com/b/sc%C3%A8ne-du-football-avec-les-joueurs-de-concurrence-au-stade-100347871.jpg'
  ]; // Replace with your image URLs
  currentImageIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.startBackgroundChange();
    this.generateBalloons();
  }

  ngOnDestroy(): void {
    this.stopBackgroundChange();
  }

  startBackgroundChange(): void {
    this.backgroundImageUrl = this.backgroundImages[this.currentImageIndex];
    this.intervalSubscription = interval(3000).subscribe(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImages.length;
      this.backgroundImageUrl = this.backgroundImages[this.currentImageIndex];
    });
  }

  stopBackgroundChange(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  email = '';
  password = '';
  rememberMe = false;

  onSubmit() {
    // Handle login logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);
    // You would typically send this data to an authentication service.
  }
}
