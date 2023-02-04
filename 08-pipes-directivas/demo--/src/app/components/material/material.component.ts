import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso';

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
      profesor: 'ada'
    },
    {
      nombre: 'react',
      comision: '2222',
      profesor: 'beth'
    },
    {
      nombre: 'vue',
      comision: '3333',
      profesor: 'linus'
    },
    {
      nombre: 'nodejs',
      comision: '4444',
      profesor: 'gracie'
    }

  ];

  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);

  //table
  columnas: string[] = [ 'nombre' , 'comision' , 'profesor' , 'acciones'];

  constructor(private dialog: MatDialog){

  }

  abrirModal(curso: Curso){
    //console.log(curso);
    const dialogRef = this.dialog.open(EditarCursoDialogComponent, { data: curso });
  }

}
