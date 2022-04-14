import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';



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
    folio: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onClear(){
    this.formRegistro.reset();
  }

  onSubmit(){
    console.log(this.formRegistro.value);
    this.formRegistro.disable();
    this.submitted = true;
  }

}
