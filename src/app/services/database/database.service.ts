import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http: HttpClient) { }

  getRegistros(): Observable<any> {
    return this.http.get(baseUrl + 'registros');
  }

  getRegistrosByDate(fecha: Date): Observable<any> {
    return this.http.get(baseUrl + 'registros/' + fecha);
  }

  createRegistro(registro: Object): Observable<any> {
    return this.http.post(baseUrl + 'registros', registro);
  }
}
