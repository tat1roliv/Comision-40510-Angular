import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { Curso } from "src/app/models/curso";
import { agregarCursoState, cargarCursoState, cursosCargados } from "./curso-state.actions";
import { CursosService } from "./services/cursos.service";


@Injectable()
export class CursosEffects{

    cargarCursos$ = createEffect(() => {
        return this.actions$.pipe( // Obs1
            ofType(cargarCursoState),
            concatMap(() => {
                return this.cursos.obtenerCursos().pipe( // Obs2
                    map((c: Curso[]) => cursosCargados({ cursos: c }))
                )
            })
        )
    });

    agregarCurso$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(agregarCursoState),
            concatMap(({ curso }) => {
                return this.cursos.agregarCurso(curso).pipe(
                    map((curso: Curso) => {
                        this.snackBar.open(`${curso.nombre} agregado`);
                        //alert(`${curso.nombre} agregado`)
                        this.router.navigate(['cursos/listar']);
                        return cargarCursoState();
                    })
                )
            })
        );
    });

    /*
    elimninarCurso$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(eliminarCursoState),
            concatMap(({ curso }) => {
                return this.cursos.eliminarCurso(curso).pipe(
                    map((curso: Curso) => {
                        return cargarCursoState();
                    })
                )
            })
        )
    });

    editarCurso$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(editarCursoState),
            concatMap(({ curso }) => {
                return this.cursos.editarCurso(curso).pipe(
                    map((curso: Curso) => {
                        return cargarCursoState();
                    })
                )
            })
        );
    });
*/
    constructor(
        private cursos: CursosService,
        private actions$: Actions,
        private router: Router,
        private snackBar: MatSnackBar
    ){}
}
