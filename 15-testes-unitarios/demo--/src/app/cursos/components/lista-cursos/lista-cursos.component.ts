import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { Sesion } from 'src/app/models/sesion';
import { CursosService } from '../../services/cursos.service';
import { SesionService } from '../../../core/services/sesion.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarCursoComponent } from '../editar-curso/editar-curso.component';


@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})

export class ListaCursosComponent implements OnInit{
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  sesion$!: Observable<Sesion>;

  constructor(
    private cursoService: CursosService,
    private router: Router,
    private sesion: SesionService,
    private dialog: MatDialog

  ){}

  ngOnInit() {
    this.cursos$ = this.cursoService.obtenerCursos();

    this.sesion$ = this.sesion.obtenerSesion();
    /*
    this.sesion.obtenerSesion().subscribe( (sesion: Sesion) => {
      console.log('estado de la sesion', sesion );
      if(!sesion.sesionActiva){
        this.router.navigate(['/auth/login']);
      }
    });
    */
  }

  eliminarCurso(curso: Curso){
    this.cursoService.eliminarCurso(curso).subscribe((curso: Curso) => {
      alert(`${curso.nombre} eliminado`);
      this.cursos$ = this.cursoService.obtenerCursos();
    } )
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

