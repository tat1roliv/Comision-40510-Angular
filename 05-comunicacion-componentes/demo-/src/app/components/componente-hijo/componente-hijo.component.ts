import { Component } from '@angular/core';
import { Input, Output , EventEmitter } from '@angular/core';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent {
  @Input() estudiantesHijo!: Estudiante[];
  @Output() eventoSalidaEstudiante: EventEmitter<Estudiante> = new EventEmitter<Estudiante>();

  nombre!: string;
  curso!: string;
  activo!: boolean;
  notaMedia!: number;

  agregarEstudiante(){
    let estudiante: Estudiante = {
      nombre: this.nombre,
      curso: this.curso,
      activo: this.activo,
      notaMedia: this.notaMedia
    }
    console.log('agregando estudiante' , estudiante);

    this.eventoSalidaEstudiante.emit(estudiante);
  }

  actualizarNombre(){
    console.log(this.nombre);
  }
}
