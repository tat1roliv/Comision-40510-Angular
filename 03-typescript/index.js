var mensaje1 = 'hola 1';
var mensaje2 = 'hola 2';
var mensaje3 = mensaje1 + " " + mensaje2;
var n1 = 3;
var n2 = 2.5;
var n3 = n1 * n2;
var booleano = false;
var opciones;
(function (opciones) {
    opciones[opciones["Si"] = 1] = "Si";
    opciones[opciones["No"] = 2] = "No";
})(opciones || (opciones = {}));
function imprimirMensaje() {
    console.log("Mensaje 1: ", mensaje1);
    console.log("Mensaje 2: ", mensaje2);
    console.log("Mensaje 3: ", mensaje3);
    console.log("Numero 1: ", n1);
    console.log("Numero 2: ", n2);
    console.log("Numero 3: ", n3);
    console.log("Booleano: ", booleano);
    console.log("ops: ", opciones);
}
imprimirMensaje();
