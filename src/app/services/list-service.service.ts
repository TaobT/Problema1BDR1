import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  public filtros: FormGroup = new FormGroup({
    columnasOcultas: new FormControl(''),
    dividirPorGenero: new FormControl('')
  });

  constructor() { }
}
