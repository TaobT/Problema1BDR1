import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http: HttpClient) { }

  //Registros
  getRegistros(): Observable<any> {
    return this.http.get(baseUrl + 'registros');
  }

  getRegistrosByDate(fecha: Date): Observable<any> {
    return this.http.get(baseUrl + 'registros/' + fecha);
  }

  createRegistro(registro: Object): Observable<any> {
    return this.http.post(baseUrl + 'registros', registro);
  }

  //Ciudades
  getCiudades(): Observable<any> {
    return this.http.get(baseUrl + 'ciudades');
  }

  createCiudad(ciudad: Object): Observable<any> {
    return this.http.post(baseUrl + 'ciudades', ciudad);
  }

  getCiudadByName(nombre: string): Observable<any> {
    return this.http.get(baseUrl + 'ciudades/' + nombre);
  }

 
  deleteCiudad(id: number): Observable<any> {
    return this.http.delete(baseUrl + 'ciudades/' + id);
  }

  //Cargos
  getCargos(): Observable<any> {
    return this.http.get(baseUrl + 'cargos');
  }

  createCargo(cargo: Object): Observable<any> {
    return this.http.post(baseUrl + 'cargos', cargo);
  }

  getCargoByName(nombre: string): Observable<any> {
    return this.http.get(baseUrl + 'cargos/' + nombre);
  }

  deleteCargo(id: number): Observable<any> {
    return this.http.delete(baseUrl + 'cargos/' + id);
  }

  //Areas de interes
  getAreasInteres(): Observable<any> {
    return this.http.get(baseUrl + 'areas');
  }

  createAreaInteres(areaInteres: Object): Observable<any> {
    return this.http.post(baseUrl + 'areas', areaInteres);
  }

  getAreaInteresByName(nombre: string): Observable<any> {
    return this.http.get(baseUrl + 'areas/' + nombre);
  }

  deleteAreaInteres(id: number): Observable<any> {
    return this.http.delete(baseUrl + 'areas/' + id);
  }

  getAreaInteresById(id: number): Observable<any> {
    return this.http.get(baseUrl + 'areas/' + id);
  }

  //Folio
  getFolios(): Observable<any> {
    return this.http.get(baseUrl + 'folios');
  }
  
  createFolio(folio: Object): Observable<any> {
    return this.http.post(baseUrl + 'folios', folio);
  }
}
