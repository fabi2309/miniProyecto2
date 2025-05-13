import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css'],
  imports: [CommonModule, FormsModule]
})
export class NosotrosComponent {
  busqueda: string = '';

  desarrolladores = [
    { nombre: 'Tadeo Andrade Sustaita', id: '353079' },
    { nombre: 'Cindy Fabiola Hernández Muñoz', id: '350114' },
    { nombre: 'Reyli Uvaldo Martínez Hernández', id: '350944' }
  ];

  desarrolladoresFiltrados() {
    return this.desarrolladores.filter(dev =>
      dev.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }
}
