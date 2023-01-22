import { Persona } from './persona';
import { Curso } from './curso';
import { Estudiante } from './estudiante';
import { Inscripcion } from './inscripcion';

let persona1: Persona = new Persona("Ada", "Test", 99);

console.log(persona1.saludar("adinha"));

let estudiante1: Estudiante = new Estudiante("ada@gmail.com", "admin123", persona1);

console.log(estudiante1.saludar("juan"))

//interface
let inscripcion1: Inscripcion = {
    curso: new Curso(), 
    estudiante: estudiante1
}; 

console.log(inscripcion1.estudiante)


