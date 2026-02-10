import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 isOffcanvasOpen = false;

  menuItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Projects', link: '/projects' },
    { label: 'Project Details', link: '/project-details' },
    { label: 'Blog', link: '/blog' },
    { label: 'Blog Details', link: '/blog-details' },
    { label: 'Contact', link: '/contact' },
  ];

 

  toggleOffcanvas() {
    this.isOffcanvasOpen = !this.isOffcanvasOpen;
    console.log('aaa')
  }
}
