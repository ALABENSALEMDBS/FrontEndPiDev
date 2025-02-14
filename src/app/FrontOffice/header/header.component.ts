import { Component, HostListener, Input } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(public navService: NavigationService) {}

  setActive(link: string) {
    this.navService.setActiveLink(link);
  }


  isSidebarOpen = false;
  isNavClose = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.isNavClose = !this.isNavClose;
  }

  XSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.isNavClose = !this.isNavClose;

  }

  


    // Utilisation du type 'UIEvent' pour l'événement de redimensionnement
    @HostListener('window:resize', ['$event'])
    onResize(event: UIEvent): void {
      if (window.innerWidth > 768) {
        this.isSidebarOpen = false;
        this.isNavClose = true;
      }
    }



    playSound() {
      const audio = new Audio();
      audio.src = 'assets/tac.mp3';
      audio.load();
      audio.volume = 0.1; // Réduit le volume à 50%
      audio.play();
    }
}
