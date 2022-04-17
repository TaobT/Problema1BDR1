import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database/database.service';

export interface Area {
  idArea: Number;
  nombreArea: string;
}

export interface Cargo {
  idCargo: Number;
  nombreCargo: string;
}

export interface Ciudad {
  idCiudad: Number;
  nombreCiudad: string;
}

@Component({
  selector: 'app-form-otros-campos',
  templateUrl: './form-otros-campos.component.html',
  styleUrls: ['./form-otros-campos.component.css']
})
export class FormOtrosCamposComponent implements OnInit {

  formArea: FormGroup = new FormGroup({
    nombreArea: new FormControl('', [Validators.required])
  }
  );

  formCargo: FormGroup = new FormGroup({
    nombreCargo: new FormControl('', [Validators.required])
  }
  );

  formCiudad: FormGroup = new FormGroup({
    nombreCiudad: new FormControl('', [Validators.required])
  }
  );


  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
  }

  areaNueva: Area = {
    idArea: 0,
    nombreArea: ''
  }

  onSubmitArea() {
    var nuevaIdArea = 0;
    //Traer todas las areas
    this.database.getAreasInteres().subscribe(areas => {
      nuevaIdArea = areas.length + 1;
      this.areaNueva.idArea = nuevaIdArea;
      this.areaNueva.nombreArea = this.formArea.value.nombreArea;
      console.log(this.areaNueva);
  
      this.database.createAreaInteres(this.areaNueva).subscribe(() => {
        this.formArea.reset();
      }
      );
    });


  }

  onClearArea() {
    this.formArea.reset();
    this.areaNueva.idArea = 0;
    this.areaNueva.nombreArea = '';
  }

  cargoNuevo: Cargo = {
    idCargo: 0,
    nombreCargo: ''
  }

  onSubmitCargo() {
    var nuevoIdCargo = 0;
    //Traer todas los cargos
    this.database.getCargos().subscribe(cargos => {
      nuevoIdCargo = cargos.length + 1;
      this.cargoNuevo.idCargo = nuevoIdCargo;
      this.cargoNuevo.nombreCargo = this.formCargo.value.nombreCargo;
      console.log(this.cargoNuevo);
  
      this.database.createCargo(this.cargoNuevo).subscribe(() => {
        this.formCargo.reset();
      }
      );
    }
    );

  }
  
  onClearCargo() {
    this.formCargo.reset();
  }

  ciudadNueva: Ciudad = {
    idCiudad: 0,
    nombreCiudad: ''
  }
  
  onSubmitCiudad() {
    var nuevoIdCiudad = 0;
    //Traer todas las ciudades
    this.database.getCiudades().subscribe(ciudades => {
      nuevoIdCiudad = ciudades.length + 1;
      this.ciudadNueva.idCiudad = nuevoIdCiudad;
      this.ciudadNueva.nombreCiudad = this.formCiudad.value.nombreCiudad;
      console.log(this.ciudadNueva);
  
      this.database.createCiudad(this.ciudadNueva).subscribe(() => {
        this.formCiudad.reset();
      }
      );
    }
    );
  }
  
  onClearCiudad() {
    this.formCiudad.reset();
  }


}
