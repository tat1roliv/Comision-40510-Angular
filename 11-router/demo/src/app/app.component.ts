import { Component } from '@angular/core';
import { of , from , filter } from 'rxjs';
import { Curso } from './models/curso';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  cursos: Curso[] = [
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

  constructor(){
/*
    of(this.cursos).subscribe((cursos) =>
    console.log("from 'of'/rxjs", cursos));

    from(this.cursos).subscribe((cursos) =>
    console.log("from 'from'/rxjs", cursos));
  }
*/

//filter/rxjs
from(this.cursos).pipe(
  filter((curso: Curso) => curso.nombre === "Angular")
  ).subscribe((curso: Curso) => console.log(curso))
}

}
