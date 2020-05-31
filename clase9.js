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

function imprimirMayorDeEdad(persona){
  console.log (`${persona.nombre} es:`);
  if (persona.edad >= 18){
    console.log('Es mayor de edad');
  } else {
    console.log('Es menor de edad')
  }
}

imprimirMayorDeEdad(alfredo);
imprimirMayorDeEdad(ixchel);
