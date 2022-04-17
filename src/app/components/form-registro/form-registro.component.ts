import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { DatabaseService } from 'src/app/services/database/database.service';

export interface Registro {
  folio: number;
  nombre: String;
  apellidoPa: String;
  apellidoMa: String;
  edad: Number;
  genero: String;
  idArea: Number;
  correoElectronico: String;
  telefono: String;
  idCiudad: Number;
  idCargo: Number;
}

export interface Folio {
  folio: number;
}

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {
  submitted: boolean = false;

  formRegistro: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellidoPa: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellidoMa: new FormControl('', [Validators.required, Validators.minLength(3)]),
    edad: new FormControl('', [Validators.required]),
    genero: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(10)]),
    ciudad: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cargo: new FormControl('', [Validators.required, Validators.minLength(3)]),
    areaInteres: new FormControl('', [Validators.required]),
    folio: new FormControl({value: '', disabled: true}),
  });

  ciudades: string [] = [];
  cargos: string [] = [];
  areas: string [] = [];

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.initFolio();
    this.initCiudades();
    this.initCargos();
    this.initAreas();
  }

  initFolio(): void {
    //Obtener el ultimo folio y sumarle 1 para el nuevo registro
    this.database.getFolios().subscribe(
      (data: any) => {
        if(data.length > 0){
          this.formRegistro.get('folio')?.setValue(data[data.length - 1].folio + 1);
        }else{
          this.formRegistro.get('folio')?.setValue(1);
        }
      }
    );
  }

  initCiudades(): void {
    this.database.getCiudades().subscribe(
      (data: any) => {
        console.log(data);
        //Añadir los nombres de las ciudades a un arreglo
        this.ciudades = data.map((ciudad: { nombreCiudad: any; }) => ciudad.nombreCiudad);
      }
    );
  }

  initCargos(): void {
    this.database.getCargos().subscribe(
      (data: any) => {
        console.log(data);
        //Añadir los nombres de los cargos a un arreglo
        this.cargos = data.map((cargo: { nombreCargo: any; }) => cargo.nombreCargo);
      }
    );
  }

  initAreas(): void {
    this.database.getAreasInteres().subscribe(
      (data: any) => {
        console.log(data);
        //Añadir los nombres de las areas a un arreglo
        this.areas = data.map((area: { nombreArea: any; }) => area.nombreArea);
        
      }
    );
  }


  onClear(){
    this.formRegistro.reset();
  }


  idCargo: Number = 0;
  idArea: Number = 0;
  idCiudad: Number = 0;

  onSubmit(){
    this.submitted = true;
    if(this.formRegistro.invalid){
      return;
    }
    this.idCargo = this.cargos.indexOf(this.formRegistro.get('cargo')?.value) + 1;
    this.idArea = this.areas.indexOf(this.formRegistro.get('areaInteres')?.value) + 1;
    this.idCiudad = this.ciudades.indexOf(this.formRegistro.get('ciudad')?.value) + 1;
    const registro: Registro = {
      folio: this.formRegistro.get('folio')?.value,
      nombre: this.formRegistro.get('nombre')?.value,
      apellidoPa: this.formRegistro.get('apellidoPa')?.value,
      apellidoMa: this.formRegistro.get('apellidoMa')?.value,
      edad: this.formRegistro.get('edad')?.value,
      genero: this.formRegistro.get('genero')?.value,
      idArea: this.idArea,
      correoElectronico: this.formRegistro.get('email')?.value,
      telefono: this.formRegistro.get('telefono')?.value,
      idCiudad: this.idCiudad,
      idCargo: this.idCargo
    }
    this.database.createRegistro(registro).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
    //Añadir un nuevo folio a la base de datos
    const folio: Folio = {
      folio: this.formRegistro.get('folio')?.value
    }
    this.database.createFolio(folio).subscribe(
      (data: any) => {
        console.log(data);
        //Reiniciar formulario
        window.location.reload();
      }
    );
  }
}