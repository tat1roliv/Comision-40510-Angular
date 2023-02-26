import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component'
import { InicioComponent} from './core/components/inicio/inicio.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((modulo) => modulo.CursosModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./autenticacion/autenticacion.module').then((modulo) => modulo.AutenticacionModule)
  },
  { path: '' , redirectTo: 'inicio', pathMatch: 'full'},
  { path: '**', component: NoEncontradoComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
