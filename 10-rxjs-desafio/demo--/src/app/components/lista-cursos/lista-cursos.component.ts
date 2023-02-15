import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})

export class ListaCursosComponent implements OnInit, OnDestroy{

  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;

  suscripcion!: Subscription;

  constructor(
    private cursoService: CursoService
  ){}

  ngOnInit() {
    this.cursos$ = this.cursoService.obtenerCursosObservable();
    this.suscripcion = this.cursos$.subscribe((cursos: Curso[])=> {
      this.cursos = cursos;
    });
  }

  ngOnDestroy() {
       this.suscripcion.unsubscribe();
  }

}

