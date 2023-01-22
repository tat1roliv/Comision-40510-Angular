"use strict";
exports.__esModule = true;
exports.Curso = void 0;
var Curso = /** @class */ (function () {
    function Curso() {
    }
    Curso.prototype.getNombre = function () {
        return this.nombre;
    };
    Curso.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Curso.prototype.getComision = function () {
        return this.comision;
    };
    Curso.prototype.setComision = function (comision) {
        this.comision = comision;
    };
    Curso.prototype.getProfesor = function () {
        return this.profesor;
    };
    Curso.prototype.setProfesor = function (profesor) {
        this.profesor = profesor;
    };
    return Curso;
}());
exports.Curso = Curso;
