export class Persona {
    public nombre: string;
    private apellido: string;
    private edad: number;

    constructor(nombre: string,apellido: string,edad: number) {
        this.nombre = nombre; 
        this.apellido = apellido;
        this.edad = edad;
    }

    saludar(nombreSaludar: string){
        return "hola," + nombreSaludar  + " soy " + this.nombre;
    }

    setNombre(nombre: string): void{
        this.nombre = nombre;
    }

    setApellido(apellido: string): void{
        this.apellido = apellido;
    }

    setEdad(edad: number): void{
        this.edad = edad;
    }

    getNombre(nombre: string): string{
        return this.nombre;
    }

    getApellido(apellido: string): string{
        return this.apellido;
    }

    getEdad(edad: number): number{
        return this.edad;
    }



}