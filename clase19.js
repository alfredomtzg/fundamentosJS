var alfredo ={
  nombre:'Alfredo',
  apellido:'Martinez',
  edad:28,
  altura: 1.68,
  peso: 80,
  cantidadDeLibros: 80
}
var ixchel ={
  nombre: 'Ixchel',
  apellido: 'Blancas',
  edad:16,
  altura: 1.65,
  peso: 60,
  cantidadDeLibros: 120
}
var amelia ={
  nombre: 'Amelia',
  apellido: 'García',
  edad:58,
  altura: 1.51,
  peso: 65,
  cantidadDeLibros: 46
}
var zachi ={
  nombre: 'Zachila',
  apellido: 'Perez',
  edad:22,
  altura: 1.40,
  peso: 58,
  cantidadDeLibros: 123
}

var personas = [alfredo, ixchel, amelia, zachi]

// var acum = 0;
//
// for (var i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].cantidadDeLibros
// }
const reducer =(acum, {cantidadDeLibros})=> acum + cantidadDeLibros

var totalDeLibros =personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)
//
// const ALTURA_PROMEDIO = 1.6
//
// const esAlta =(persona) =>{
//   return persona.altura > ALTURA_PROMEDIO
// }
// arriba funcion abaja arrow funcion
// const esBaja = persona  => persona.altura <= ALTURA_PROMEDIO
// var personasAltas = personas.filter(esAlta);
// var personasBajas = personas.filter(esBaja);
// console.log(personasAltas);
// console.log(personasBajas);
//
// persona.altura = persona.altura *100
// const pasarAlturaACms = persona => ({
//     ...persona,
//     altura: persona.altura * 100
// })
//
// var personasCms = personas.map(pasarAlturaACms);
//
// console.log(personasCms);
