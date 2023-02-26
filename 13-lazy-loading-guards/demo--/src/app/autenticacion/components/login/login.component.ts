import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
        usuario: new FormControl(),
        contrasena: new FormControl(),
        esAdmin: new FormControl()
    });
  }

  login(){
    let usuario: any = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      esAdmin:  this.formulario.value.esAdmin
    }
    console.log('test login', usuario)
  }

}
