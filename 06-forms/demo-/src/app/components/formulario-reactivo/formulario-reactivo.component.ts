import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {
  formularioLogin: FormGroup;

  constructor(){
    let controles: any = {
      correo: new FormControl('', [ Validators.required , Validators.email ]),
      contrasena: new FormControl('', [ Validators.required , Validators.minLength(5) ]),
      recordarCredenciales: new FormControl(false, [])
    }
    this.formularioLogin = new FormGroup(controles);
  }

  login(){
    console.log('login', this.formularioLogin);
  }

}
