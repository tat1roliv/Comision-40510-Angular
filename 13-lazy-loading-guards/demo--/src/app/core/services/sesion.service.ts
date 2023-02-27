import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';


@Injectable({
  providedIn: 'root'
})
export class SesionService {

  sesion$!: BehaviorSubject<Sesion>;

  constructor() {
    let sesion: Sesion = {
      sesionActiva: false,

    }

    this.sesion$ = new BehaviorSubject<Sesion>(sesion);

  }

  crearSesion(sesion: Sesion) {
    console.log('crea sesion desde el service injetado en login.service')
    this.sesion$.next(sesion);
  }

  obtenerSesion(): Observable<Sesion>{
    return this.sesion$.asObservable();
  }
}
