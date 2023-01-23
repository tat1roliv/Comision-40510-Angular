import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  subtitulo: string = "Este es un ejemplo de interpolacion mediante {{ }}";
  variable1: number = 5;
  estudianteActual: Estudiante = {
    nombre: 'José',
    edad: 22,
    estaActivo: true
  };
  listaEstudiantes: Estudiante[] = [
    {
      nombre: 'José',
      edad: 22,
      estaActivo: true
    },
    {
      nombre: 'Mónica',
      edad: 35,
      estaActivo: false
    },
    {
      nombre: 'ada',
      edad: 99,
      estaActivo: true
    }
  ];

}
