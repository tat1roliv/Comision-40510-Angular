import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component'
import { InicioComponent} from './components/inicio/inicio.component'

const routes: Routes = [
  {path: 'cursos'},
  {path: 'inicio', component: InicioComponent },
  {path: '' },
  {path: '**', component: NoEncontradoComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
