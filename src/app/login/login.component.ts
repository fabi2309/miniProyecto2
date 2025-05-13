import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  name = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.authService.login(this.username, this.password, this.name)) {
      this.router.navigate(['/']);  // ✅ redirige al home
    } else {
      this.errorMessage = 'Credenciales incorrectas';
    }
  }
}
