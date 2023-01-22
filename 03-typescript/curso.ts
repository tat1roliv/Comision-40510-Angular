export class Curso{
    private nombre: string;
    private comision: string;
    private profesor: string;

    getNombre(): string{
        return this.nombre;
    }

    setNombre(nombre: string): void{
        this.nombre = nombre;
    }

    getComision(): string{
        return this.comision;
    }

    setComision(comision: string): void{
        this.comision = comision;
    }

    getProfesor(): string{
        return this.profesor;
    }

    setProfesor(profesor: string): void{
        this.profesor = profesor;
    }
}