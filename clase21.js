// cómo funcionan lor prototipos y las herencias que aparecen en otros programas
// El prototype es un objeto más de JS entonces si lo modificamos en una cierta altura del código y apartir de ahñi va a quedar modificado.
 //
// Las function y prototype deben ir arriba para que esten accesibles a todos objetos que se vayan creando
function Persona(nombre, apellido,altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}
Persona.prototype.saludar = function() {
  console.log (`hola me llamo ${this.nombre} ${this.apellido}`);
}

// el this.altura en la arrow function es window es el objeto global dentro del navegador
// this es window, la misma referencia en memoria this === window
Persona.prototype.soyAlto = function () {
  return this.altura >= altura
}
// Persona.prototype.soyAlto = function (){
//   if (this.altura >= altura) {
//     console.log (`y soy alto`);
//   }else {
//     console.log (`y no soy alto`);
//   }
// }
var altura = 1.8;
var alfredo = new Persona('Alfredo', 'Martinez',1.8);
var ixchel = new Persona ('Ixchel', 'López', 1.5);
var arturo = new Persona ('Arturo', 'Luna', 1.9);

// alfredo.soyAlto();
// ixchel.soyAlto();
// arturo.soyAlto();
