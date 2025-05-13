import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DatosComponent } from './datos/datos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent, HeaderComponent, FooterComponent, ReactiveFormsModule, MatDatepickerModule, MatSnackBarModule, DatosComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public authService: AuthService) {}
}
