import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ClasesComponent } from './clases/clases.component';
import { InstalacionesComponent } from './instalaciones/instalaciones.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';
import { MaquinaComponent } from './form-maquina/maquina/maquina.component';
import { EntrenamientoComponent } from './form-entrenamiento/entrenamiento/entrenamiento.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'clases', component: ClasesComponent },
  { path: 'instalaciones', component: InstalacionesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'maquina-popular', component: MaquinaComponent },
  { path: 'registro-entrenamiento', component: EntrenamientoComponent },
  { 
    path: 'form-maquina',
    loadComponent: () => import('./form-maquina/maquina/maquina.component').then(m => m.MaquinaComponent)
  },
  { 
    path: 'form-entrenamiento',
    loadComponent: () => import('./form-entrenamiento/entrenamiento/entrenamiento.component').then(m => m.EntrenamientoComponent)
  }
];
