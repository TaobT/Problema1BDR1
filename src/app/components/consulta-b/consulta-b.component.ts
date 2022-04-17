import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DatabaseService } from 'src/app/services/database/database.service';

export interface Registro{
  nombre: string;
  apellidoPa: string;
  apellidoMa: string;
  genero: string;
  areaInteres: string;
};

export interface RegistroConId {
  nombre: string;
  apellidoPa: string;
  apellidoMa: string;
  genero: string;
  idArea: number;
}

@Component({
  selector: 'app-consulta-b',
  templateUrl: './consulta-b.component.html',
  styleUrls: ['./consulta-b.component.css']
})
export class ConsultaBComponent implements OnInit {
  dataSource = new MatTableDataSource();
  dataSourceMale = new MatTableDataSource();
  dataSourceFemale = new MatTableDataSource();
  displayedColumns: string[] = ['nombre', 'apellidoPa', 'apellidoMa', 'areaInteres'];

  areas: string [] = [];
  registrosConId: RegistroConId[] = [];
  registros: Registro[] = [];

  filtroAreaInteres: FormGroup = new FormGroup({
    areaInteres: new FormControl(''),
  });

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    //Llenar el arreglo de registrosConId con los registros de la base de datos
    this.database.getRegistros().subscribe(
      (data: any) => {
        this.registrosConId = data;
        //Por cada elemento en el arreglo de registrosConId, llenar el arreglo de registros con el nombre del area de interes
        this.registrosConId.forEach(element => {
          this.database.getAreasInteres().subscribe(
            (data: any) => {
              data.forEach((area: { idArea: number; nombreArea: string; }) => {
                if(area.idArea == element.idArea){
                  this.registros.push({
                    nombre: element.nombre,
                    apellidoPa: element.apellidoPa,
                    apellidoMa: element.apellidoMa,
                    genero: element.genero,
                    areaInteres: area.nombreArea
                  });
                }
              }
              );
              //Llenar el dataSource con los registros
              this.dataSource.data = this.registros;
              //Llenar el dataSourceMale con los registros de genero masculino
              this.dataSourceMale.data = this.registros.filter(registro => registro.genero == 'Masculino');
              //Llenar el dataSourceFemale con los registros de genero femenino
              this.dataSourceFemale.data = this.registros.filter(registro => registro.genero == 'Femenino');
            }
          );
        }
        );
      }
    );
    this.initAreas();
  }

  initAreas(): void {
    this.database.getAreasInteres().subscribe(
      (data: any) => {
        //Añadir los nombres de las areas a un arreglo
        this.areas = data.map((area: { nombreArea: any; }) => area.nombreArea);
        
      }
    );
  }

  getDisplayedColumns(): string[]{
    return this.displayedColumns;
  }

  buscarAreaInteres(): void{
    //Si el campo de area de interes esta vacio, mostrar todos los registros
    if(this.filtroAreaInteres.value.areaInteres == ''){
      this.dataSource.data = this.registros;
      this.dataSourceMale.data = this.registros.filter(registro => registro.genero == 'Masculino');
      this.dataSourceFemale.data = this.registros.filter(registro => registro.genero == 'Femenino');
    }else{
      //Si el campo de area de interes no esta vacio, mostrar los registros que coincidan con el area de interes
      //Llenar el dataSourceMale con los registros de genero masculino que coincidan con el area de interes
      this.dataSourceMale.data = this.registros.filter(registro => registro.areaInteres == this.filtroAreaInteres.value.areaInteres && registro.genero == 'Masculino');
      //Llenar el dataSourceFemale con los registros de genero femenino que coincidan con el area de interes
      this.dataSourceFemale.data = this.registros.filter(registro => registro.areaInteres == this.filtroAreaInteres.value.areaInteres && registro.genero == 'Femenino');
    }
  }

  restart(): void{
    //Reiniciar formulario
    this.filtroAreaInteres.reset();
    //Reiniciar tablas
    this.dataSourceMale.data = this.registros.filter(registro => registro.genero == 'Masculino');
    this.dataSourceFemale.data = this.registros.filter(registro => registro.genero == 'Femenino');
  }
}
