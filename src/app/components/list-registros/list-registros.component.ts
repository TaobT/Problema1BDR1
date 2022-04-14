import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import { FormControl, FormGroup } from '@angular/forms';
import { ListServiceService } from 'src/app/services/list-service.service';

@Injectable()
export class MatPaginatorIntlEsp extends MatPaginatorIntl{
  override itemsPerPageLabel: string = 'Registros por página:';
  override nextPageLabel: string = 'Siguiente';
  override previousPageLabel: string = 'Anterior';
  override firstPageLabel: string = 'Primera página';
  override lastPageLabel: string = 'Última página';
}

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
  selector: 'app-list-registros',
  templateUrl: './list-registros.component.html',
  styleUrls: ['./list-registros.component.css']
})
export class ListRegistrosComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource(registros);

  dividirPorG: boolean = false;

  columnasOcultas: string[] = [];

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
    this.listService.filtros.valueChanges.subscribe(filtros => {
      this.columnasOcultas = filtros.columnasOcultas;
      this.applyFilters();
    });
    this.displayedColumns = this.columnas.filter(col => col.mostrar).map(col => col.def);
  }

  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  hideColumns(){
    this.displayedColumns = this.columnas.filter(col => col.mostrar).map(col => col.def);
    if(this.columnasOcultas){
      this.columnasOcultas.forEach(col => {
        this.displayedColumns = this.displayedColumns.filter(c => c !== col);
      });
    }
  }

  applyFilters(){
    this.hideColumns();
  }

  getDisplayedColumns(){
    return this.displayedColumns;
  }

  restart(){
    this.displayedColumns = this.columnas.filter(col => col.mostrar).map(col => col.def);
    this.applyFilters();
  }
}
