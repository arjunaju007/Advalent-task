import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private router: Router) {}

  login() {
    // Perform login logic here, e.g., validate credentials
    // Simulating a successful login
    if (this.username === 'admin' && this.password === 'password') {
      alert('Login Successful');
      this.router.navigate(['/Home']); // Navigate to the dashboard page
    }
  }
}
