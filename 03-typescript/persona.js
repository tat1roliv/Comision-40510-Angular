"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Persona.prototype.saludar = function (nombreSaludar) {
        return "hola," + nombreSaludar + " soy " + this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.getNombre = function (nombre) {
        return this.nombre;
    };
    Persona.prototype.getApellido = function (apellido) {
        return this.apellido;
    };
    Persona.prototype.getEdad = function (edad) {
        return this.edad;
    };
    return Persona;
}());
exports.Persona = Persona;
