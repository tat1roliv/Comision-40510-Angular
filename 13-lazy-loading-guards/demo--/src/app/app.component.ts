import { Component, OnInit } from '@angular/core';
import { Curso } from './models/curso';
import { Router } from '@angular/router'
import { Sesion } from './models/sesion';
import { SesionService } from './core/services/sesion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo--';
  sesion$!: Observable<Sesion>

  constructor(
    private router: Router,
    private sesion: SesionService
  ){

  }

  ngOnInit(): void {
      this.sesion$ = this.sesion.obtenerSesion();
  }

  redigirInicio(){
    this.router.navigate(['inicio'] )
  }

  logout(){
    let sesionLogout: Sesion = {
      sesionActiva: false
    }
    this.sesion.logout(sesionLogout);
    this.router.navigate(['auth/login'])
  }

}
