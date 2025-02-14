import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  balloons: { left: number, speed: number }[] = [];

  showScrollButton = false;


  ngOnInit(): void {
    this.generateBalloons();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.showScrollButton = scrollTop > 200; // Affiche la flèche après 200px de scroll
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  

  generateBalloons(): void {
    for (let i = 0; i < 10; i++) {
      this.balloons.push({
        left: Math.random() * 100, // Position aléatoire
        speed: 5 + Math.random() * 5 // Vitesse entre 5s et 10s
      });
    }
  }
  
}
