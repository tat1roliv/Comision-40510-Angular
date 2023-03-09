import { Profesor2 } from "./profesor2";

export interface Curso2{
    id: string;
    nombre: string;
    comision: string;
    profesor: string;
    inscripcionAbierta: boolean;
    fechaInicio: Date;
    fechaFin: Date;
}