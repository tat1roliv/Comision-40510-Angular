"use strict";
exports.__esModule = true;
var persona_1 = require("./persona");
var curso_1 = require("./curso");
var estudiante_1 = require("./estudiante");
var persona1 = new persona_1.Persona("Ada", "Test", 99);
console.log(persona1.saludar("adinha"));
var estudiante1 = new estudiante_1.Estudiante("ada@gmail.com", "admin123", persona1);
console.log(estudiante1.saludar("juan"));
//interface
var inscripcion1 = {
    curso: new curso_1.Curso(),
    estudiante: estudiante1
};
console.log(inscripcion1.estudiante);
