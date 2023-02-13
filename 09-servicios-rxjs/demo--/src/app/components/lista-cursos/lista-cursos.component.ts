import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent {

  cursos!: Curso[];

  constructor(
    private cursoService: CursoService
  ){
    console.log("datos lista cursos", cursoService.obtenerCursos())
  }
 
}
