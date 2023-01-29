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

    //let regexCorreo: string = '^[a-z]+@[a-z]+\\.[a-z]{2-3}$';
    let regexCorreo: string ='';

    let controles: any = {
      correo: new FormControl('', [ Validators.required , Validators.email , Validators.pattern(regexCorreo) ]),
      contrasena: new FormControl('', [ Validators.required , Validators.minLength(5) ]),
      recordarCredenciales: new FormControl(false, [])
    }

    this.formularioLogin = new FormGroup(controles);

  }

  handleLogin(){
    console.log('login', this.formularioLogin);

    //check regex
    if(this.formularioLogin.controls['correo'].errors?.['pattern']){
      console.log('error en el formato del correo');
    }

    //check required
    if(this.formularioLogin.controls['correo'].errors?.['required']){
      console.log('el correo es obligatorio');
    }

  }

}
