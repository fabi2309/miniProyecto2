import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-entrenamiento',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './entrenamiento.component.html',
  styleUrls: ['./entrenamiento.component.css']
})
export class EntrenamientoComponent {
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);

  tiposEntrenamiento = ['Fuerza', 'Cardio', 'HIIT', 'Crossfit', 'Yoga'];
  objetivos = ['Bajar peso', 'Ganar músculo', 'Mejorar resistencia', 'Rehabilitación'];

  form = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    tipoEntrenamiento: ['', Validators.required],
    fecha: ['', [Validators.required, this.validarFecha]],
    objetivo: ['', Validators.required],
    tiempo: ['', [Validators.required, Validators.min(15)]]
  });

  validarFecha(control: any) {
    const fecha = new Date(control.value);
    return fecha > new Date() ? { fechaInvalida: true } : null;
  }

  onSubmit() {
    if (this.form.valid) {
      const datos = {
        ...this.form.value,
        fecha: new Date(this.form.value.fecha!).toLocaleDateString()
      };
      
      const historial = JSON.parse(localStorage.getItem('historial_entrenamientos') || '[]');
      historial.push(datos);
      localStorage.setItem('historial_entrenamientos', JSON.stringify(historial));
      
      this.snackBar.open('¡Entrenamiento registrado!', 'Cerrar', { 
        duration: 3000,
        panelClass: ['success-snackbar']
      });
      
      this.form.reset();
    }
  }
}