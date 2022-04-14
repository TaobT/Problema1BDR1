import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ListServiceService } from 'src/app/services/list-service.service';

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
  selector: 'app-list-generos-registros',
  templateUrl: './list-generos-registros.component.html',
  styleUrls: ['./list-generos-registros.component.css']
})
export class ListGenerosRegistrosComponent implements OnInit {
  dataSource = new MatTableDataSource(registros);
  dataSourceMale = new MatTableDataSource(registros.filter(reg => reg.genero === 'Masculino'));
  dataSourceFemale = new MatTableDataSource(registros.filter(reg => reg.genero === 'Femenino'));

  columnasOcultas: string[] = [];

  displayedColumns: string[] = [];

  columnas = [
    {def: 'folio', mostrar: true},
    {def: 'nombre', mostrar: true},
    {def: 'apellidoPa', mostrar: true},
    {def: 'apellidoMa', mostrar: true},
    {def: 'edad', mostrar: true},
    {def: 'genero', mostrar: true},
    {def: 'email', mostrar: true},
    {def: 'telefono', mostrar: true},
    {def: 'ciudad', mostrar: true},
    {def: 'cargo', mostrar: true},
    {def: 'areaInteres', mostrar: true},
    {def: 'fecha', mostrar: true}
  ];

  constructor(
    private listService: ListServiceService
  ) { }


  ngOnInit(): void {
    this.displayedColumns = this.columnas.filter(col => col.mostrar).map(col => col.def);
    this.listService.filtros.valueChanges.subscribe(filtros => {
      this.columnasOcultas = filtros.columnasOcultas;
      this.hideColumns();
    });
  }

  hideColumns(){
    this.displayedColumns = this.columnas.filter(col => col.mostrar).map(col => col.def);
    if(this.columnasOcultas){
      this.columnasOcultas.forEach(col => {
        this.displayedColumns = this.displayedColumns.filter(c => c !== col);
      });
    }
  }

  getDisplayedColumns(){
    return this.displayedColumns;
  }
}
