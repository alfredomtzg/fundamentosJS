var alfredo =//este pasa a ser un objeto al cual se le pueden asignar otros valores
{
  nombre: 'Alfredo', //los Atributos van key y luego value y se separan por dos puntos (:)
  apellido: 'Martinez', //key : value tienen que estar separados por una coma (,)
  edad: 28
};

var ixchel =//este pasa a ser un objeto al cual se le pueden asignar otros valores
{
  nombre: 'Ixchel', //los Atributos van key y luego value y se separan por dos puntos (:)
  apellido: 'Blancas',//key : value tienen que estar separados por una coma (,)
  edad: 12
};

function imprimirNombreYlaEdad (persona){
  let {nombre} = persona;
  let {edad} = persona;
  let {apellido} = persona;
  // let {edad} = edad;
  console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
}
imprimirNombreYlaEdad(alfredo);
imprimirNombreYlaEdad(ixchel);

function cumpleanos (persona){
  return{
    ...persona,
    edad: persona.edad + 1
  }
}
