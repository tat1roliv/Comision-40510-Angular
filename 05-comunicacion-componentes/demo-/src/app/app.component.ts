import { Component } from '@angular/core';
import { Estudiante } from './models/estudiante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-';

  estudiantes: Estudiante[] = [
    {
      nombre: 'ada',
      curso: 'angular',
      activo: true,
      notaMedia: 10
    },
    {
      nombre: 'juan',
      curso: 'react',
      activo: true,
      notaMedia: 8
    },
    {
      nombre: 'maria',
      curso: 'angular',
      activo: true,
      notaMedia: 7
    },
    {
      nombre: 'steve',
      curso: 'react',
      activo: false,
      notaMedia: 4.2
    },

  ]
}
