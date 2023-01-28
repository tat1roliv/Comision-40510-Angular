import { Component } from '@angular/core';
import { Input, Output , EventEmitter } from '@angular/core';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent {
  @Input() estudiantesPadre!: Estudiante[];
  @Output() eventoSalidaPadre: EventEmitter<Estudiante> = new EventEmitter<Estudiante>();

  constructor(){}

  agregarEstudiante(){
    console.log('agregando estudiante');
  }

  actualizarEstudiantesPadre(estudiante: Estudiante){
    console.log('agregando estudiante desde hasta componente-padre', estudiante);

    this.eventoSalidaPadre.emit(estudiante);
  }
}
