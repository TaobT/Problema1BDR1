import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerIntl } from '@angular/material/datepicker';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DatabaseService } from 'src/app/services/database/database.service';

@Injectable()
export class MatDatepickerIntlEsp extends MatDatepickerIntl{
  override calendarLabel= 'Calendario';
  override openCalendarLabel= 'Abrir calendario';
  override closeCalendarLabel= 'Cerrar calendario';
  override prevMonthLabel= 'Mes anterior';
  override nextMonthLabel= 'Mes siguiente';
  override prevYearLabel= 'Año anterior';
  override nextYearLabel= 'Año siguiente';
  override prevMultiYearLabel= 'Años anteriores';
  override nextMultiYearLabel= 'Años siguientes';
  override switchToMonthViewLabel= 'Ver mes';
  override switchToMultiYearViewLabel= 'Ver años';
  override formatYearRange(start: string, end: string): string {
    return `${start} - ${end}`;
  }
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
  fecha: Date;
};

@Component({
  selector: 'app-consulta-a',
  templateUrl: './consulta-a.component.html',
  styleUrls: ['./consulta-a.component.css']
})
export class ConsultaAComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellidoPa', 'apellidoMa', 'fecha'];
  dataSource = new MatTableDataSource();

  contador = 0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  filtroFecha: FormGroup = new FormGroup({
    fecha: new FormControl(''),
    cantidadDeParticipantes: new FormControl({value: '', disabled: true})
  });

  constructor(private database: DatabaseService) { }

  buscarFecha(){
    //Usar servicio de base de datos para filtrar por fecha
    console.log(this.filtroFecha.get('fecha')?.value);
    this.database.getRegistrosByDate(this.filtroFecha.value.fecha).subscribe(registros => {
      registros.forEach((registro: { fecha: string | number | Date; }) => {
        registro.fecha = new Date(registro.fecha).toLocaleDateString('es-MX', {day: '2-digit', month: '2-digit', year: 'numeric'});
      });
      this.filtroFecha.get('cantidadDeParticipantes')?.setValue(registros.length);
      this.dataSource.data = registros;
    });
  }

  ngOnInit(): void {
    //Capturar datos del servicio de database y mostrarlos en la tabla
    this.database.getRegistros().subscribe(registros => {
      registros.forEach((registro: { fecha: string | number | Date; }) => {
        registro.fecha = new Date(registro.fecha).toLocaleDateString('es-MX', {day: '2-digit', month: '2-digit', year: 'numeric'});
      });
      this.filtroFecha.get('cantidadDeParticipantes')?.setValue(registros.length);
      this.dataSource.data = registros;
      
    });
  }

  getDisplayedColumns(){
    return this.displayedColumns;
  }

}
