import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerIntl } from '@angular/material/datepicker';
import { ListServiceService } from 'src/app/services/list-service.service';

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

@Component({
  selector: 'app-filtros-registros',
  templateUrl: './filtros-registros.component.html',
  styleUrls: ['./filtros-registros.component.css']
})
export class FiltrosRegistrosComponent implements OnInit {
  
  filtros: FormGroup = new FormGroup({
    columnasOcultas: new FormControl(''),
    dividirPorGenero: new FormControl('')
  });

  constructor(
    private listService: ListServiceService
  ) { }

  ngOnInit(): void {
    this.filtros.valueChanges.subscribe(filtros => {
      this.listService.filtros.get('dividirPorGenero')?.setValue(filtros.dividirPorGenero);
    });
  }

  applyFilters(){
    this.listService.filtros.setValue(this.filtros.value);
  }


  restart(){
    this.filtros.reset();
    this.listService.filtros.setValue(this.filtros.value);
  }
}
