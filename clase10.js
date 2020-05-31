var alfredo = {
  nombre: 'Alfredo',
  apellido: 'Martinez',
  edad: 28,
  ingeniero: false,
  cocinero : true,
  cantante : false,
  dj : false,
  guitarrista : true,
  drone : false,
}

var ixchel = {
  nombre: 'Ixchel',
  apellido: 'Blancas',
  edad: 17,
  ingeniero: true,
  cocinero : false,
  cantante : true,
  dj : false,
  guitarrista : true,
  drone : true,
}
function imprimirProfesiones(persona) {
  console.log (`${persona.nombre} es:`);

  if (persona.ingeniero) {
    console.log('Ingeniero');
  }
  if (persona.cocinero) {
    console.log('Cocinero');
  }
  if (persona.cantante) {
    console.log('Cantante');
  }
  if (persona.guitarrista) {
    console.log('Guitarrista');
  }
  if (persona.drone) {
    console.log('Vuela drone');
  }
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirMayorDeEdad(persona){
  // console.log (`${persona.nombre} es:`);
  if (esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

imprimirMayorDeEdad(ixchel);
