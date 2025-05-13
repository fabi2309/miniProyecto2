import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}
  localStorageData: { [key: string]: string } = {};
  keys: string[] = [];

  ngOnInit(): void {
    this.loadLocalStorage();
  }

  loadLocalStorage(): void {
    this.localStorageData = {};
    this.keys = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        this.localStorageData[key] = localStorage.getItem(key) || '';
        this.keys.push(key);
      }
    }
  }

  deleteItem(key: string): void {
    localStorage.removeItem(key);
    this.loadLocalStorage();
  }

  editItem(key: string): void {
    const newValue = prompt(`Editar valor para '${key}':`, this.localStorageData[key]);
    if (newValue !== null) {
      localStorage.setItem(key, newValue);
      this.loadLocalStorage();
    }
  }
}
