import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomseguroPipe } from '../domseguro.pipe';

@Component({
  selector: 'app-clases',
  standalone: true,
  imports: [CommonModule, DomseguroPipe],
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.css'
})
export class ClasesComponent {
   clases = [
  { 
    nombre: 'Zumba', 
    descripcion: 'Zumba es una clase de fitness divertida basada en ritmos latinos. Es una forma de ejercicio aeróbico que combina movimientos de baile con música de alta energía. Ideal para quemar calorías mientras te diviertes.', 
    imagen: './zumba.jpg' 
  },
  { 
    nombre: 'Spinning', 
    descripcion: 'Spinning es una clase de ciclismo indoor que simula un recorrido en bicicleta por diferentes terrenos. Se enfoca en mejorar la resistencia y fortalecer las piernas mientras disfrutas de un entrenamiento dinámico y motivador.', 
    imagen: './spinning.jpg' 
  },
  { 
    nombre: 'CrossFit', 
    descripcion: 'CrossFit es un programa de entrenamiento de alta intensidad que combina ejercicios de fuerza, agilidad y resistencia. Es perfecto para aquellos que buscan un desafío físico y mejorar su rendimiento general.', 
    imagen: './crossfit.jpg' 
  }
];


  horarios = [
    { clase: 'Zumba', lunes: '7:00 AM', miercoles: '7:00 AM', viernes: '7:00 AM' },
    { clase: 'Spinning', lunes: '6:00 PM', miercoles: '6:00 PM', viernes: '6:00 PM' },
    { clase: 'CrossFit', lunes: '5:00 PM', miercoles: '5:00 PM', viernes: '5:00 PM' }
  ];

  title = 'videoseguro';
  video: string="BYktJckS0Iw";
}
