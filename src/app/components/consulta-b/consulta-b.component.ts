import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface Registro{
  nombre: string;
  apellidoPa: string;
  apellidoMa: string;
  edad: number;
  genero: string;
  email: string;
  telefono: string;
  ciudad: string;
  cargo: string;
  areaInteres: string;
  folio: string;
  fecha: string;
};


const registros: Registro[] = [
  {
    nombre: 'Juan',
    apellidoPa: 'Perez',
    apellidoMa: 'Lopez',
    edad: 25,
    genero: 'Masculino',
    email: '@gmail.com',
    telefono: '55555555',
    ciudad: 'Ciudad de México',
    cargo: 'Ingeniero',
    areaInteres: 'Ingeniería',
    folio: '12345',
    fecha: new Date(2020, 3, 20).toLocaleDateString('es-MX', {day: '2-digit', month: '2-digit', year: 'numeric'})
  },
  {
    nombre: 'Victoria Anais',
    apellidoPa: 'Guerra',
    apellidoMa: 'Calzada',
    edad: 18,
    genero: 'Femenino',
    email: '@hotmail.com',
    telefono: '11111111',
    ciudad: 'Viña del Mar',
    cargo: 'Doctora Forense',
    areaInteres: 'Forense',
    folio: '12346',
    fecha: new Date(2020, 3, 19).toLocaleDateString('es-MX', {day: '2-digit', month: '2-digit', year: 'numeric'})
  }
];

@Component({
  selector: 'app-consulta-b',
  templateUrl: './consulta-b.component.html',
  styleUrls: ['./consulta-b.component.css']
})
export class ConsultaBComponent implements OnInit {
  dataSource = new MatTableDataSource(registros);
  dataSourceMale = new MatTableDataSource(registros.filter(registro => registro.genero === 'Masculino'));
  dataSourceFemale = new MatTableDataSource(registros.filter(registro => registro.genero === 'Femenino'));
  displayedColumns: string[] = ['nombre', 'apellidoPa', 'apellidoMa', 'areaInteres'];

  filtroAreaInteres: FormGroup = new FormGroup({
    areaInteres: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
    //Capturar datos desde la base de datos con un servicio
    
  }

  getDisplayedColumns(): string[]{
    return this.displayedColumns;
  }

  buscarAreaInteres(): void{
    this.dataSourceFemale = new MatTableDataSource(registros.filter(registro => registro.areaInteres === this.filtroAreaInteres.value.areaInteres && registro.genero === 'Femenino'));
    this.dataSourceMale = new MatTableDataSource(registros.filter(registro => registro.areaInteres === this.filtroAreaInteres.value.areaInteres && registro.genero === 'Masculino'));
  }

  restart(): void{
    this.dataSourceMale = new MatTableDataSource(registros.filter(registro => registro.genero === 'Masculino'));
    this.dataSourceFemale = new MatTableDataSource(registros.filter(registro => registro.genero === 'Femenino'));
    this.filtroAreaInteres.reset();
  }

}
