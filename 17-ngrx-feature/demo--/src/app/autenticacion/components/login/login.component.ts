import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from '../../../models/usuario';
import { LoginService } from '../../services/login.service';
import { cargarSesion } from '../../state/auth.actions';
import { AuthState } from '../../state/auth.reducer';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  formulario!: FormGroup;
  suscripcion!: Subscription

  constructor(
    private loginService: LoginService,
    private router: Router,
    private authStore: Store<AuthState>,

  ) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
        usuario: new FormControl(),
        contrasena: new FormControl(),
        esAdmin: new FormControl(false)
    });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
  
  login(){
    let usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      esAdmin:  this.formulario.value.esAdmin
    }
    this.suscripcion = this.loginService.login(usuario).subscribe((sesion: Sesion) => {
      this.authStore.dispatch(cargarSesion({sesion: sesion}))
      this.router.navigate(['inicio'])
    })

  }

}
