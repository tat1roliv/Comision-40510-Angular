import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent {
 @Input() estudiantesHijo!: Estudiante[];
}
