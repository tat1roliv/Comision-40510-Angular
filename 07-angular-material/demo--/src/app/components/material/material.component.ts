import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso';

import { MatTableDataSource } from '@angular/material/table';

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
    }
    
  ];

  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);

}
