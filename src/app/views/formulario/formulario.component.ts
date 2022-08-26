import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  apiForm = new FormGroup({
    nombre : new FormControl('', Validators.required),
    edad : new FormControl('', Validators.required),
    carrera : new FormControl('', Validators.required),
    hobbie : new FormControl('', Validators.required)
  })

  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  funcForm(form: any) {
    console.log(form)
  }

}
