// Declaración
function suma(a, b) {
    return a + b
}
/* 
function nombre (parámetros) {
    contenido
    return valor
} 
*/

// Invocación
suma(2, 3)
// nombre(argumentos)

var resultado1 = suma(2, 3)
var resultado2 = suma(4, 6)
var resultado3 = suma(10, 12)

console.log(resultado1) //5
console.log(resultado2) //10
console.log(resultado3) //22

// Declaración
function saludar(nombre) {
    console.log("Hola " + nombre)
}
// Invocaciones
saludar("JavaScript") //"Hola JavaScript"
saludar("Platzi") // "Hola Platzi"

// Declaración
var suma = function (a, b) {
    return a + b
}
// Invocación
var resultado = suma(2, 2)

console.log(resultado) //4