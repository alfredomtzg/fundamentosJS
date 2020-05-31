var alfredo =//este pasa a ser un objeto al cual se le pueden asignar otros valores
{
  nombre: 'Alfredo', //los Atributos van key y luego value y se separan por dos puntos (:)
  apellido: 'Martinez', //key : value tienen que estar separados por una coma (,)
  edad: 28
};

var persona2 =//este pasa a ser un objeto al cual se le pueden asignar otros valores
{
  nombre: 'ixchel', //los Atributos van key y luego value y se separan por dos puntos (:)
  apellido: 'Blancas',//key : value tienen que estar separados por una coma (,)
  edad: 12
};

function imprimirNombreEnMayusculas ({apellido}){
  console.log (apellido.toUpperCase());
}
// function imprimirNombreEnMayusculas (persona){
//   let nombre = persona.nombre);
//   let {nombre} = persona;
// console.log (nombre.toUpperCase());
// }
function imprimirNombreEnMinusculas(n){
  n =n.toLowerCase();
  console.log(n);
}
function imprimirNombreYlaEdad (persona){
  let {nombre} = persona;
  let {edad} = persona;
  // let {edad} = edad;
  console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);
}
imprimirNombreYlaEdad(alfredo);
imprimirNombreYlaEdad(persona2);
