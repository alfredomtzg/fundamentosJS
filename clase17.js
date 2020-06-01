var alfredo ={
  nombre:'Alfredo',
  apellido:'Martinez',
  edad:28,
  altura: 168,
  peso: 80
}
var ixchel ={
  nombre: 'Ixchel',
  apellido: 'Blancas',
  edad:16,
  altura: 1.65,
  peso: 60
}
var amelia ={
  nombre: 'Amelia',
  apellido: 'García',
  edad:58,
  altura: 151,
  peso: 65
}
var zachi ={
  nombre: 'Zachila',
  apellido: 'Perez',
  edad:22,
  altura: 1.40,
  peso: 58
}

const esAlta =(persona) =>{
  return persona.altura > 1.8
}
// arriba funcion abaja arrow funcion

const esBaja = persona  => persona.altura <= 1.8

var personas = [alfredo, ixchel, amelia, zachi]

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);

console.log(personasAltas);
console.log(personasBajas);
