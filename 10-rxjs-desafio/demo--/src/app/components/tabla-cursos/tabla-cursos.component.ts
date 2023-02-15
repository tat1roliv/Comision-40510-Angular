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
 
  dataSource!: MatTableDataSource<Curso> ;
  suscripcion!: Subscription;

  columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta', 'acciones']

  constructor(
    private cursoService: CursoService
  ){ }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Curso>();
    this.suscripcion = this.cursoService.obtenerCursosObservable().subscribe((cursos: Curso[])=> {   
      this.dataSource.data = cursos;
    });
  };

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  
}
