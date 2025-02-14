import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }
  

  activeLink: string = '/home'; // Lien par défaut souligné

  setActiveLink(link: string) {
    this.activeLink = link;
  }

  getActiveLink(): string {
    return this.activeLink;
  }
}
