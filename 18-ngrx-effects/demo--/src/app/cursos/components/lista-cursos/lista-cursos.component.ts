import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { Sesion } from 'src/app/models/sesion';
import { CursosService } from '../../services/cursos.service';
import { SesionService } from '../../../core/services/sesion.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarCursoComponent } from '../editar-curso/editar-curso.component';
import { Store } from '@ngrx/store';
//import { AppState } from '../../../core/state/app.state';
//import { cargarCursos, cursosCargados } from 'src/app/core/state/cursos.actions';
//import { selectorCargandoCursos, selectorCursosCargados } from 'src/app/core/state/cursos.selectors';
import { selectCargandoCursos, selectCursosCargados } from '../../curso-state.selectors';
import { cargarCursoState, cursosCargados, eliminarCursoState } from '../../curso-state.actions';
import { CursoState } from '../../curso-state.reducer';


@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})

export class ListaCursosComponent implements OnInit{
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  sesion$!: Observable<Sesion>;
  cargando$!: Observable<Boolean>;

  constructor(
    private cursoService: CursosService,
    private router: Router,
    private sesion: SesionService,
    private dialog: MatDialog,
    private store: Store<CursoState>
  ){}

  ngOnInit() {

    this.cargando$ = this.store.select(selectCargandoCursos);

    this.store.dispatch(cargarCursoState());

    /*
    this.cursoService.obtenerCursos().subscribe((cursos: Curso[]) => {
      this.store.dispatch(cursosCargados({ cursos: cursos }));
    });
    */

    this.cursos$ = this.store.select(selectCursosCargados);

    this.sesion$ = this.sesion.obtenerSesion();

  }

  eliminarCurso(curso: Curso){
    alert(`${curso.nombre} eliminado`);
    this.store.dispatch(eliminarCursoState({ curso }));

    /*
    this.cursoService.eliminarCurso(curso).subscribe((curso: Curso) => {
      alert(`${curso.nombre} eliminado`);
      this.cursos$ = this.cursoService.obtenerCursos();
    } )
    */

  }

//replaced
  redirigirEditarCurso(curso: Curso){
    this.router.navigate(['cursos/editar', curso]);
  }

  abrirDialog(curso: Curso){
    this.dialog.open(EditarCursoComponent, {
      data: curso
    }).afterClosed().subscribe((curso: Curso) =>{
      alert(`${curso.nombre} editado`);
      this.cursos$ = this.cursoService.obtenerCursos();
    })
  }


}

