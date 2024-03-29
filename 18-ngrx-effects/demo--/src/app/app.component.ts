import { Component, OnInit } from '@angular/core';
import { Curso } from './models/curso';
import { Router } from '@angular/router'
import { Sesion } from './models/sesion';
import { SesionService } from './core/services/sesion.service';
import { Observable } from 'rxjs';
import { AuthState } from './autenticacion/state/auth.reducer';
import { Store } from '@ngrx/store';
import { selectSesionActiva, selectSesionState, selectUsuarioActivo } from './autenticacion/state/auth.selectors';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo--';
 //sesion$!: Observable<Sesion>
  sesionActiva$!: Observable<Boolean>;
  usuarioActivo$!: Observable<Usuario | undefined>;

  constructor(
    private router: Router,
    //private sesion: SesionService
    private authStore: Store<AuthState>
  ){

  }

  ngOnInit(): void {
    this.sesionActiva$ = this.authStore.select(selectSesionActiva);
    this.usuarioActivo$ = this.authStore.select(selectUsuarioActivo);
  }

  redigirInicio(){
    this.router.navigate(['inicio']);
  }

  logout(){
    let sesionLogout: Sesion = {
      sesionActiva: false,
      usuarioActivo: undefined
    }
    // this.sesion.logout(sesionLogout);
    this.router.navigate(['auth/login']);
  }

}
