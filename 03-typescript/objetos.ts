import { Persona } from './persona';
import { Estudiante  } from './estudiante';

let persona1: Persona = new Persona("Ada", "Test", 99);

console.log(persona1.saludar("adinha"));

let estudiante1: Estudiante = new Estudiante("ada@gmail.com", "admin123", persona1);

console.log(estudiante1.saludar("juan"))

