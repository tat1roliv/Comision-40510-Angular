import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Profesor } from 'src/app/models/profesor';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditarCursoDialogComponent } from '../editar-curso-dialog/editar-curso-dialog.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {

  cursos: Curso[] = [
    {
      nombre: 'angular',
      comision: '1111',
      profesor: {
        nombre: 'ada',
        correo: 'ada@correo.com',
        fechaRegistro: new Date(2022, 2, 15),
      },
      inscripcionAbierta: true,
      fechaInicio: new Date(2023, 0, 1, 20, 30), //year month(0-11) day hh mm
      fechaFin: new Date(2023, 11, 31, 20, 30),
    },

    {
      nombre: 'react',
      comision: '2222',
      profesor: {
        nombre: 'beth',
        correo: 'beth@correo.com',
        fechaRegistro: new Date(2023, 2, 1),
      },
      inscripcionAbierta: false,
      fechaInicio: new Date(2024, 0, 1, 20, 30),
      fechaFin: new Date(2024, 11, 31, 20, 30),
    },

    {
      nombre: 'vue',
      comision: '3333',
      profesor: {
        nombre: 'linus',
        correo: 'linus@correo.com',
        fechaRegistro: new Date(2022, 1, 15),
      },
      inscripcionAbierta: true,
      fechaInicio: new Date(2025, 0, 1, 20, 30),
      fechaFin: new Date(2025, 11, 31, 20, 30),
    },

    {
      nombre: 'nodejs',
      comision: '4444',
      profesor: {
        nombre: 'gracie',
        correo: 'gracie@correo.com',
        fechaRegistro: new Date(2022, 10, 15),
      },
      inscripcionAbierta: false,
      fechaInicio: new Date(2026, 0, 1, 20, 30),
      fechaFin: new Date(2026, 11, 31, 20, 30),
    },

  ];

  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);

  //table cols
  columnas: string[] = [ 'nombre' , 'comision' , 'profesor' , 'fechaInicio', 'fechaFin', 'inscripcionAbierta' , 'acciones'];

  constructor(private dialog: MatDialog){

  }

  abrirModal(curso: Curso){
    //console.log(curso);
    const dialogRef = this.dialog.open(EditarCursoDialogComponent, { data: curso });
  }

}
