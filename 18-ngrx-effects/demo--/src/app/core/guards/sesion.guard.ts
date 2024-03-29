import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AuthState } from 'src/app/autenticacion/state/auth.reducer';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../services/sesion.service';
import { selectSesionState } from '../../autenticacion/state/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    //private sesion: SesionService,
    private authStore: Store<AuthState>,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authStore.select(selectSesionState).pipe(
      map((sesion: Sesion) => {
        if(sesion.usuarioActivo){
          return true;
        }else{
          this.router.navigate(['auth/login']);
          return false;
        }
      })
    );
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authStore.select(selectSesionState).pipe(
        map((sesion: Sesion) => {
          if(sesion.usuarioActivo){
            return true;
          }else{
            this.router.navigate(['auth/login']);
            return false;
          }
        })
      );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authStore.select(selectSesionState).pipe(
        map((sesion: Sesion) => {
          if(sesion.usuarioActivo){//sesionActiva
            return true;
          }else{
            this.router.navigate(['auth/login']);
            return false;
          }
        })
      );
  }
}
