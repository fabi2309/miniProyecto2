import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-instalaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './instalaciones.component.html',
  styleUrl: './instalaciones.component.css'
})
export class InstalacionesComponent {
  areas = [
    { nombre: 'Área de pesas', descripcion: 'Espacio equipado con mancuernas, barras y máquinas.', imagen: './pesas.jpg' },
    { nombre: 'Salón de clases', descripcion: 'Lugar para zumba, yoga y spinning.', imagen: './salon.jpg' },
    { nombre: 'Vestidores', descripcion: 'Baños limpios y lockers disponibles.', imagen: './vestidores.jpg' }
  ];

  seleccionada = this.areas[0]; // Por defecto mostrar la primera

  servicios = [
    'Wi-Fi gratuito',
    'Estacionamiento amplio',
    'Climatización y ventilación',
    'Personal capacitado'
  ];
}
