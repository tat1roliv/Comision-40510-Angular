import { Component } from '@angular/core';
import { Curso } from './models/curso';
import { Router } from '@angular/router'
import { Sesion } from './models/sesion';
import { SesionService } from './core/services/sesion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo--';

  constructor(
    private router: Router,
    private sesion: SesionService
  ){

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
