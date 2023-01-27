import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent {
  @Input() estudiantesPadre!: Estudiante[];

  constructor(){}
}
