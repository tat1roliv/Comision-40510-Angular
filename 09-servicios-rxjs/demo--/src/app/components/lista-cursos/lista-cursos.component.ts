import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  cursos!: Curso[];

  constructor(
    private cursoService: CursoService
  ){
    //this.cursos = cursoService.obtenerCursos();
    console.log("datos lista cursos", cursoService.obtenerCursos())
  }

  ngOnInit(): void {
    this.cursos = this.cursoService.obtenerCursos();
  }

}
