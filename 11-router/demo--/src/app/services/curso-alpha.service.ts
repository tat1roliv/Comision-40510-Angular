import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoAlphaService {

  private cursos: Curso[] = [
    {
      nombre: 'NodeJS alpha',
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
      nombre: 'React alpha',
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

  constructor() { }

  obtenerCursos(): Curso[]{
    return this.cursos;
  }

  agregarCurso(curso: Curso){
    //curso.nombre = 'angular service alpha';
    this.cursos.push(curso);
    console.log('Curso agregado', this.cursos);
  }
}
