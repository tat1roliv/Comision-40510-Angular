import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component'
import { InicioComponent} from './core/components/inicio/inicio.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent },
  {path: '' , redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', component: NoEncontradoComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
