import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from '../models/curso';
import { of , from , filter} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private cursos: Curso[] = [
    {
      nombre: 'Angular',
      comision: '49533',
      profesor: {
        nombre: 'Abner',
        correo: 'abner@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'Vue',
      comision: '42523',
      profesor: {
        nombre: 'Lucas',
        correo: 'lucas@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 1, 1, 20, 30, 0),
      fechaFin: new Date(2023, 1, 31, 20, 30, 0),
      inscripcionAbierta: false
    },
    {
      nombre: 'NodeJS',
      comision: '42433',
      profesor: {
        nombre: 'Tristan',
        correo: 'tristan@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 2, 1, 20, 30, 0),
      fechaFin: new Date(2023, 2, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'React',
      comision: '49536',
      profesor: {
        nombre: 'Freddy',
        correo: 'freddy@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 3, 1, 20, 30, 0),
      fechaFin: new Date(2023, 3, 31, 20, 30, 0),
      inscripcionAbierta: false
    }
  ];

  private cursos$!: BehaviorSubject<Curso[]>;

  constructor() {
    //observable/subject
    this.cursos$ = new BehaviorSubject(this.cursos); 
    //filter
    from(this.cursos).pipe(
      filter((curso: Curso) => curso.comision === '49536')
    ).subscribe((curso: Curso) => console.log(' from pipe curso', curso));

  }

  
  obtenerCursosObservable(): Observable<Curso[]>{
    return this.cursos$.asObservable();
  }

  
  obtenerCursosPromise(): Promise<Curso[]>{
    return new Promise((resolve, reject) => {
      if(this.cursos.length > 0){
        resolve(this.cursos);
      }else{
        reject([]);
      }
    });
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    this.cursos$.next(this.cursos);
    console.log('Curso agregado', this.cursos);
  }


}
