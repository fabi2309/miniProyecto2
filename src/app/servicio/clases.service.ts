import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {
  private apiUrl = 'assets/data/clases.json';

  constructor(private http: HttpClient) {}

  obtenerClases(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
