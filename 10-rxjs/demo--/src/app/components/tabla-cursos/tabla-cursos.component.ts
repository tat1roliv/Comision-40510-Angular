import { Component, OnDestroy, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.css']
})
export class TablaCursosComponent implements OnInit, OnDestroy {
  //cursos!: Curso[];

  dataSource!: MatTableDataSource<Curso> ;
  suscripcion!: Subscription;

  columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta', 'acciones']

  constructor(
    private cursoService: CursoService
  ){
    //this.cursos = cursoService.obtenerCursos();
    //this.dataSource = new MatTableDataSource<Curso>(this.cursos);
    //console.log("datos tabla cursos", cursoService.obtenerCursos())
  }

  ngOnInit(): void {
    //this.cursos = this.cursoService.obtenerCursos();
    console.log("instanciando mattabledatasource");
    this.dataSource = new MatTableDataSource<Curso>();

    this.suscripcion = this.cursoService.obtenerCursosObservable().subscribe((cursos: Curso[])=> {
      console.log("agregando datos al mattabledatasource");
      this.dataSource.data = cursos;
    });

    console.log("last line ng oninit");
  
  };

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();

  }

}
