import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProfesorService } from 'src/app/core/services/profesor.service';
import { Curso } from 'src/app/models/curso';
import { CursoState } from '../../curso-state.reducer';
import { Profesor } from 'src/app/models/profesor';
import { agregarCursoState } from '../../curso-state.actions';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit{
  formulario!: FormGroup;
  profesores$!: Observable<Profesor[]>

  constructor(
    private router: Router,
    private cursoService: CursosService,
    private profesores: ProfesorService,
    private store: Store<CursoState>
  ){}

  ngOnInit(): void {
    this.profesores$ = this.profesores.obtenerProfesores();
    this.formulario = new FormGroup({
      comision: new FormControl(''),
      fechaFin: new FormControl(''),
      fechaInicio: new FormControl(''),
      inscripcionAbierta: new FormControl(false),
      nombre: new FormControl(''),
      profesor: new FormControl({}),
    })
  }

  agregarCurso(){

    let curso: Curso = {
      id: '',
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      profesor: this.formulario.value.profesor
    }

   
    this.store.dispatch(agregarCursoState({ curso: curso }));
    /*
    this.cursoService.agregarCurso(curso).subscribe((curso: Curso) => {
      alert(`${curso.nombre} agregado`)
      this.router.navigate(['cursos/listar']);
    })
  */
  }
}
