import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  ubicacion = {
    direccion: 'Calle Fitness #123, Colonia Salud, Ciudad Fit',
    horario: 'Lunes a sábado: 6:00 AM – 10:00 PM',
    telefono: '555-123-4567',
    correo: 'contacto@gimnasiofit.com'
  };

  redes = [
  { nombre: 'Facebook', url: 'https://facebook.com/gimnasiofit', icono: 'fa-brands fa-square-facebook' },
  { nombre: 'Instagram', url: 'https://instagram.com/gimnasiofit', icono: 'fa-brands fa-instagram' },
  { nombre: 'WhatsApp', url: 'https://wa.me/525551234567', icono: 'fa-brands fa-whatsapp' }
  ];
}
