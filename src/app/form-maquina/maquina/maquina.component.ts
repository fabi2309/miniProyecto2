import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-maquina',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatRadioModule,
    MatCardModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.css']
})
export class MaquinaComponent {
  maquinas = ['Press de banca', 'Leg press', 'Máquina de remo', 'Smith machine', 'Bicicleta elíptica'];
  frecuencias = ['Diario', '3-4 veces/semana', '1-2 veces/semana'];
  
  datos = {
    nombre: '',
    maquinaFavorita: '',
    fechaUso: '',
    frecuencia: ''
  };

  constructor(private snackBar: MatSnackBar) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const registros = JSON.parse(localStorage.getItem('maquinas_populares') || '[]');
      registros.push(this.datos);
      localStorage.setItem('maquinas_populares', JSON.stringify(registros));
      
      this.snackBar.open('¡Datos guardados!', 'Cerrar', { 
        duration: 3000,
        panelClass: ['success-snackbar']
      });
      
      form.resetForm();
      this.resetDatos();
    }
  }

  private resetDatos() {
    this.datos = {
      nombre: '',
      maquinaFavorita: '',
      fechaUso: '',
      frecuencia: ''
    };
  }

  validarFecha(fecha: string): boolean {
    if (!fecha) return false;
    const selectedDate = new Date(fecha);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate <= today;
  }
}