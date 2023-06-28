import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router: Router) {}
  logout() {
 {
      alert(' Successfully Logout');
      this.router.navigate(['login']); // Navigate to the dashboard page
    }

  }}
