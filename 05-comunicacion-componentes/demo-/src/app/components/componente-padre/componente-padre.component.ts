import { Component } from '@angular/core';
import { Input, Output , EventEmitter } from '@angular/core';
import { ViewChild, ElementRef  } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent implements AfterViewInit{
  @Input() estudiantesPadre!: Estudiante[];
  @Output() eventoSalidaPadre: EventEmitter<Estudiante> = new EventEmitter<Estudiante>();
  @ViewChild('mensaje') mensajePruebaRef!: ElementRef;

  constructor(){}

  agregarEstudiante(){
    console.log('agregando estudiante');
  }

  actualizarEstudiantesPadre(estudiante: Estudiante){
    console.log('agregando estudiante desde hasta componente-padre', estudiante);

    this.eventoSalidaPadre.emit(estudiante);
  }

  ngAfterViewInit(): void {
    this.mensajePruebaRef.nativeElement.textContent = 'texto nuevo';
    console.log('test 2 ngAfterViewInit' , this.mensajePruebaRef.nativeElement);
  }
}
