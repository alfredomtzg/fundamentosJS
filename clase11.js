var alfredo ={
  nombre:'Alfredo',
  apellido:'Martinez',
  edad:28
}
var ixchel ={
  nombre: 'Ixchel',
  apellido: 'Blancas',
  edad:16
}

const MAYORIA_DE_EDAD = 18

// const esMayorDeEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD;
// }
const esMayorDeEdad =  ({edad}) => edad >= MAYORIA_DE_EDAD;


function imprimirMayorDeEdad(persona){
  // console.log (`${persona.nombre} es:`);
  if (esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}
const esMenorDeEdad = ({edad}) => edad < MAYORIA_DE_EDAD;

function permitirAcceso (persona){
  if(esMenorDeEdad(persona)){
    console.log ('Acceso denegado');
  }
}
