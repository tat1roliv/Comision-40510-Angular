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
    //console.log("datos lista cursos", cursoService.obtenerCursos())
  }

  ngOnInit(): void {
    console.log("passo 1");
     this.cursoService.obtenerCursosPromise().then((cursos: Curso[])=>{
      console.log("passo 2");
      this.cursos = cursos;
     }).catch((error: any) => {
      console.log('error en el promise', error)
     });
     console.log("passo 3")
  }

}
