const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
// para llamar a jQuery  se tiene que poner $.get, el primero parametro es url y el segunfo es el crossDomain:true despues viene la funcion

const opts = { crossDomain:true};

const onPeopleResponse = function (persona) {
  console.log(`hola soy ${persona.name} y mi cumpleaños es ${persona.birth_year}`);

};

function obtenerPersonaje(id) {
  let url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
  $.get(url,opts, onPeopleResponse);
}

for (var i = 1; i < 11; i++) {
  obtenerPersonaje(i)
}
