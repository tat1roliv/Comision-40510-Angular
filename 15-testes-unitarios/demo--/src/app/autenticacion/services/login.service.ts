import { Injectable } from '@angular/core';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private sesion: SesionService
  ) { }

  login(usuario: Usuario){
    //localStorage.setItem('sesionActiva', JSON.stringify(usuario));

    let sesion: Sesion = {
      sesionActiva: true,
      usuarioActivo: usuario
    }

    this.sesion.crearSesion(sesion)
  }
}
